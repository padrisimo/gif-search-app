import React, { useState } from 'react';
import api from '../api';
import useApi from '../hooks/useApi';
import { SearchInput, Button, Form } from './Form';
import AppWrapper from './AppWrapper';

function App() {
  const [query, setQuery] = useState('');
  const [, fetch] = useApi();

  const handleQuery = e => setQuery(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(api.apiUrl(0, query));
    setQuery('');
  };

  return (
    <AppWrapper>
      <Form>
        <SearchInput onHandleQuery={handleQuery} query={query} />
        <Button title="Search" query={query} onHandleSubmit={handleSubmit} />
      </Form>
    </AppWrapper>
  );
}

export default App;
