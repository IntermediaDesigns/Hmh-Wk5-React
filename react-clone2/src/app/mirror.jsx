import { useState } from 'react';

// Create an input that will reflect what you type on the screen
export default function Mirror() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{text}</p>
    </div>
  );
}
