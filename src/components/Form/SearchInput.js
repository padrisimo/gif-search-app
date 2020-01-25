import React from 'react';
import PropTypes from 'prop-types';

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

SearchInput.propTypes = {
  onHandleQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default SearchInput;
