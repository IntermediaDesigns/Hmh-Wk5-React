import { useState } from 'react';

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
