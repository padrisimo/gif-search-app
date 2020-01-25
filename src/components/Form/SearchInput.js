import React from 'react';

const SearchInput = ({ onHandleQuery, query }) => (
  <input
    style={{ padding: '3em' }}
    value={query}
    onChange={onHandleQuery}
    placeholder="search gif"
    type="text"
    name="query"
    data-testid="SearchInput"
    required
  />
);

export default SearchInput;
