import { useState } from 'react';

function Square({ backgroundColor, setColor }) {
  return (
    <div
      onClick={setColor}
      style={{
        backgroundColor,
        width: "100px",
        height: "100px",
        border: "2px solid black"
      }}
    />
  );
}

export default function App() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleColor = () => setIsClicked(!isClicked);

  return (
    <Square
      backgroundColor={isClicked ? "blue" : "white"}
      setColor={toggleColor}
    />
  );
}
