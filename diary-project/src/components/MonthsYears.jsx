// using useState to manage the state of months, years, currentMonthIndex, and currentYearIndex.
import { useState } from 'react'

// two props: onMonthChange and onYearChange, they are callback functions that will be called when the month or year changes.
export default function MonthYear ({ onMonthChange, onYearChange, months, years, currentMonthIndex, setCurrentMonthIndex, currentYearIndex, setCurrentYearIndex}) {
  

  // Function to handle month change, it increments or decrements the currentMonthIndex. If the new index is out of range, it wraps around to the other end of the array and changes the year. After updating the index, it calls the onMonthChange callback with the new index.
  const handleMonthChange = direction => {
    let newIndex =
        direction === 'next' ? currentMonthIndex + 1 : currentMonthIndex - 1;
    if (newIndex < 0) {
        newIndex = months.length - 1;
        handleYearChange('prev');
    } else if (newIndex >= months.length) {
        newIndex = 0;
        handleYearChange('next');
    }
    setCurrentMonthIndex(newIndex);
    onMonthChange && onMonthChange(newIndex);
};

// Function to handle year change, does about same for month but in year
const handleYearChange = direction => {
    let newIndex =
        direction === 'next' ? currentYearIndex + 1 : currentYearIndex - 1;
    if (newIndex < 0) {
        newIndex = years.length - 1;
    } else if (newIndex >= years.length) {
        newIndex = 0;
    }
    setCurrentYearIndex(newIndex);
    onYearChange && onYearChange(years[newIndex].year);
};

  
// two buttons for changing the month/year and a div to display the current month/year. The onClick prop of the buttons is set to call handleMonthChange or handleYearChange when clicked.
  return (
    <div className='monthYearContainer'>
      <div className='mthContainer'>
        <button onClick={() => handleMonthChange('prev')}>❮</button>
        <div>{months[currentMonthIndex].month}</div>
        <button onClick={() => handleMonthChange('next')}>❯</button>
      </div>

      <div className='yearContainer'>
        <button onClick={() => handleYearChange('prev')}>❮</button>
        <div>{years[currentYearIndex].year}</div>
        <button onClick={() => handleYearChange('next')}>❯</button>
      </div>
    </div>
  )
}
