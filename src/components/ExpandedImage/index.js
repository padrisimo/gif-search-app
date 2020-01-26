import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const ExpandedImage = ({ gif }) => {
  return (
    <ImageCard data-testid="ExpandedImage">
      <h1>{gif.title}</h1>
      <img src={gif.images.original.url} alt={gif.title} />
      <h2>{gif.username && `by ${gif.username}`}</h2>
      <h3>{gif.rating && `👍 ${gif.rating}`}</h3>
    </ImageCard>
  );
};

ExpandedImage.propTypes = {
  gif: PropTypes.instanceOf(Object).isRequired
};

export default ExpandedImage;
