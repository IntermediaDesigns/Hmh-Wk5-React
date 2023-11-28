import { useState, useEffect } from 'react'


  // create a function that moves the car left or right when pressing down the right and left arrows, add style to flip the car

export default function Car () {
  const [marginLeft, setMarginLeft] = useState(-5)

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowRight') {
        setMarginLeft(marginLeft => marginLeft + 5)
      }
      if (e.key === 'ArrowLeft') {
        setMarginLeft(marginLeft => marginLeft - 5)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      style={{
        fontSize: '100px',
        marginTop: '-50px',
        marginLeft: `${marginLeft}px`
      }}
    >
      <span className='flipCar'>🏎️</span>
      <style jsx>{`
        .flipCar {
          transform: scale(-1, 1);
          display: inline-block;
        }
      `}</style>
    </div>
  )
}


