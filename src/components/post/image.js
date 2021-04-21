import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, caption }) => <img src={src} alt={caption} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

export default Image;