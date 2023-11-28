import { useState } from 'react';

// Create a counter that increases by 1 or decresases by 1 when clicking the plus or minus button, style buttons to have a space in between
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    marginRight: '5px',
    marginLeft: '5px'
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleMinusClick}>-</button>
      <span>{count}</span>
      <button style={buttonStyle} onClick={handlePlusClick}>+</button>
    </div>
  );
}
