import React from 'react';

const MainCarouselImage = ({ text }) => (
  <div className="kk" style={{ width: '100%' }}>
    <img
      className="d-block w-100"
      src={`https://via.placeholder.com/800x400?text=${text}`}
      alt={text}
    />
  </div>
);

export default MainCarouselImage;
