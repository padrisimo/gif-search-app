import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

const X = styled.div`
  position: fixed;
  cursor: pointer;
  color: black;
  padding:.7rem 1rem .8rem;
  border-radius: 50px;
  margin: 1rem;
  background: rgba(255,255,255, 0.4);
  
  &:hover {
    background: rgba(255,255,255, 0.8);

  }
`;

const Close = ({ handleClose }) => {
  return <X onClick={handleClose}>x</X>;
};

Close.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default Close;
