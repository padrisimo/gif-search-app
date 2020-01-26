import React, { useRef, useEffect, Children } from 'react';
import Bricks from 'bricks.js';
import PropTypes from 'prop-types';

const BrickLayout = ({ children, sizes }) => {
  const container = useRef(null);

  useEffect(() => {
    const bricks = Bricks({
      container: container.current,
      packed: 'data-packed',
      sizes,
      position: true
    });

    bricks.resize(true);

    if (Children.count(children) > 0) {
      bricks.pack();
    }
  }, [children]);

  return (
    <div ref={container} data-testid="BrickLayoutContainer">
      {children}
    </div>
  );
};

BrickLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sizes: PropTypes.shape({}).isRequired
};

export default BrickLayout;
