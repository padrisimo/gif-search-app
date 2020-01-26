import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SwagButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 1px solid white;
  border-radius: 25px;
  color: white;
  padding: 1rem 4rem;
  margin-left: 1rem;

  &:hover:enabled {
    background: white;
    color: tomato;
  }
  &:disabled {
    color: lightgrey;
    border-color: lightgrey;
    cursor: not-allowed;
  }
`;

const Button = ({ title, onHandleSubmit, query }) => (
  <SwagButton
    data-testid="Button"
    type="submit"
    onClick={onHandleSubmit}
    disabled={!query}
  >
    {title}
  </SwagButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default Button;
