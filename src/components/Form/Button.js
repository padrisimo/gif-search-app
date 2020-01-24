import React from 'react';

const Button = ({title='search gif', onHandleSubmit, query}) => (
  <button type="submit" onClick={onHandleSubmit} disabled={!query}>
    {title}
  </button>
);

export default Button;
