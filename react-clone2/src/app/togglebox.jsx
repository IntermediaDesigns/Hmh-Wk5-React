import { useState } from 'react';
// Make the square to toggle, add backgroundColor and setColor and set styling
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
// Have the box turn blue and back to white when clicked
export default function Togglebox() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleColor = () => setIsClicked(!isClicked);

  return (
    <Square
      backgroundColor={isClicked ? "blue" : "white"}
      setColor={toggleColor}
    />
  );
}
