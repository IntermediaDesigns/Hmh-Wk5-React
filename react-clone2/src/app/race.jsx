import { useState } from 'react';

export default function Car() {
  const [marginLeft, setMarginLeft] = useState(-5);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setMarginLeft(marginLeft + 5);
    }
    if (e.key === 'ArrowLeft') {
      setMarginLeft(marginLeft - 5);
    }
  };
  

  return (
    <div
      id="car"
      style={{ fontSize: '100px', marginTop: '-50px', marginLeft: `${marginLeft}px` }}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <span className="flipCar">🏎️</span>
      <style jsx>{`
        .flipCar {
          transform: scale(-1, 1);
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
