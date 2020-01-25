import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onHandleSubmit, query }) => (
  <button
    data-testid="Button"
    type="submit"
    onClick={onHandleSubmit}
    disabled={!query}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default Button;
