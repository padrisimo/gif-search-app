import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImageButton = styled.button`
  background: tomato;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: ${({ size }) => size}px;
  height: ${({ size, item }) =>
    (item.images.fixed_width_downsampled.height * size) /
    item.images.fixed_width_downsampled.width}px;
  overflow: hidden;
  &:focus {
    opacity: 0.6;
  }

`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const ImageItem = ({ item, size, onSelect }) => (
  <ImageButton
    data-testid="ImageItemButton"
    type="button"
    size={size}
    item={item}
    onClick={() => onSelect(item)}
  >
    <Img
      data-testid="ImageItemImage"
      width={item.images.fixed_width_downsampled.width}
      height={item.images.fixed_width_downsampled.height}
      alt={item.title}
      src={item.images.fixed_width_downsampled.url}
    />
  </ImageButton>
);

ImageItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  size: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ImageItem;
