import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5em;
  border: 0;
  border-radius: 25px;
`;

const SearchInput = ({ onHandleQuery, query }) => (
  <Input
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
