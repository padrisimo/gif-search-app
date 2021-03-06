import React, { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Dock from 'react-dock';

import {
  getDefaultMasonryConfig,
  getMasonryConfigExceptLast,
  getMediaBreakpoints
} from '../utils/masonry';
import { masonryConfig, gifPerPage, paitItBlack } from '../constants';
import api from '../api';
import useApi from '../hooks/useApi';
import useMedia from '../hooks/useMedia';
import { SearchInput, Button, Form, HeaderHolder, WhiteText } from './Form';
import AppWrapper from './AppWrapper';
import ImageItem from './ImageItem';
import BrickLayout from './BrickLayout';
import ExpandedImage from './ExpandedImage';
import Close from './ExpandedImage/Close';

function App() {
  const [query, setQuery] = useState('');
  const [gif, setGif] = useState();
  const [firstRun, setFirstRun] = useState(true);
  const [visible, setVisible] = useState(false);
  const isFirstRun = useRef(true);
  const [{ data, loading, error, lastPage }, fetch] = useApi();

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
    setVisible(false);
    setGif(null);
  };

  const masonryConfigMatchMedia = useMedia(
    getMediaBreakpoints(masonryConfig),
    getMasonryConfigExceptLast(masonryConfig),
    getDefaultMasonryConfig(masonryConfig)
  );

  const expandGif = item => {
    setGif(item);
    setVisible(true);
  };

  return (
    <>
      <Form>
        <SearchInput onHandleQuery={handleQuery} query={query} />
        <Button title="Search" query={query} onHandleSubmit={handleSubmit} />
      </Form>
      <AppWrapper>
        {gif && (
          <Dock
            isVisible={visible}
            dockStyle={{ background: paitItBlack }}
            position="right"
            zIndex={1}
            dimMode="opaque"
            size={1}
            fluid
          >
            <HeaderHolder />
            <Close handleClose={() => setVisible(false)} />
            <ExpandedImage gif={gif} />
          </Dock>
        )}
        <HeaderHolder />
        {error && <WhiteText>omg! {error}</WhiteText>}
        <InfiniteScroll
          pageStart={0}
          loadMore={page =>
            query && fetch(api.apiUrl(page * gifPerPage), query)
          }
          hasMore={!loading && !lastPage}
          useWindow
          initialLoad={false}
          loader={
            !firstRun &&
            query && (
              <WhiteText key="loading">
                loading...
              </WhiteText>
            )
          }
        >
          {data.length > 0 ? (
            <BrickLayout sizes={masonryConfig}>
              {data.map(item => (
                <ImageItem
                  item={item}
                  size={masonryConfigMatchMedia.imageWidth}
                  key={item.id}
                  // eslint-disable-next-line no-console
                  onSelect={() => expandGif(item)}
                />
              ))}
            </BrickLayout>
          ) : (
            <WhiteText>Ups! nothing found!</WhiteText>
          )}
        </InfiniteScroll>
      </AppWrapper>
    </>
  );
}

export default App;
