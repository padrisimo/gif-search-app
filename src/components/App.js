import React, { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import {
  getComponentWrapperWidth,
  getDefaultMasonryConfig,
  getMasonryConfigExceptLast,
  getMediaBreakpoints
} from '../utils/masonry';
import { masonryConfig, gifPerPage } from '../constants';
import api from '../api';
import useApi from '../hooks/useApi';
import useMedia from '../hooks/useMedia';
import { SearchInput, Button, Form } from './Form';
import AppWrapper from './AppWrapper';
import ImageItem from './ImageItem';
import BrickLayout from './BrickLayout';

function App() {
  const [query, setQuery] = useState('');
  const [firstRun, setFirstRun] = useState(true);
  const isFirstRun = useRef(true);
  const [{ data, loading, lastPage }, fetch] = useApi();

  const handleQuery = e => setQuery(e.target.value);

  useEffect(() => {
    fetch(api.apiUrl(0, query));

    if (isFirstRun.current) {
      isFirstRun.current = false;
      setFirstRun(false);
    }
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(api.apiUrl(0, query));
  };

  const masonryConfigMatchMedia = useMedia(
    getMediaBreakpoints(masonryConfig),
    getMasonryConfigExceptLast(masonryConfig),
    getDefaultMasonryConfig(masonryConfig)
  );

  return (
    <AppWrapper width={getComponentWrapperWidth(masonryConfigMatchMedia)}>
      <Form>
        <SearchInput onHandleQuery={handleQuery} query={query} />
        <Button title="Search" query={query} onHandleSubmit={handleSubmit} />
      </Form>

      <InfiniteScroll
        pageStart={0}
        loadMore={page => fetch(api.apiUrl(page * gifPerPage), query)}
        hasMore={!loading && !lastPage}
        useWindow
        initialLoad={false}
        loader={
          !firstRun && (
            <div key="loading" style={{ color: 'white' }}>
              loading...
            </div>
          )
        }
      >
        {data.length > 0 && (
          <BrickLayout sizes={masonryConfig}>
            {data.map(item => (
              <ImageItem
                item={item}
                size={masonryConfigMatchMedia.imageWidth}
                key={item.id}
                // eslint-disable-next-line no-console
                onSelect={() => console.log(item)}
              />
            ))}
          </BrickLayout>
        )}
      </InfiniteScroll>
    </AppWrapper>
  );
}

export default App;
