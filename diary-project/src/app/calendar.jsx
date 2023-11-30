import { useState, useEffect } from 'react';
import MonthYear from './monthsYears.jsx';

export default function Days() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [entries, setEntries] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  // Function to generate days for the current month and year, then stored in the days state variable.
  const generateDays = (date) => {
    let daysArray = [];
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let day = new Date(currentYear, currentMonth, 1);
    let daysInMonth = [];
    while (day.getMonth() === currentMonth) {
      daysInMonth.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    daysArray.push({
      year: currentYear,
      month: currentMonth,
      days: daysInMonth,
    });
    setDays(daysArray);
  };

  // used to call the generateDays function when the component mounts and whenever the currentDate state variable changes.
  useEffect(() => {
    generateDays(currentDate);
  }, [currentDate]);


  // handles the event when a day is clicked. If the clicked day is the same as the currently selected day, it clears the selectedDay state variable. Otherwise, it sets the selectedDay state variable to the clicked day and clears the listItems state variable.
  const handleDayClick = (day) => {
    if (selectedDay && selectedDay.toDateString() === day.toDateString()) {
        setSelectedDay(null); // Clear the selected day if it's the same as the clicked day
    } else {
        setSelectedDay(day);
        setListItems([]); // Clear the listItems state when another day is clicked
    }
  };

  // handles the event when the input text changes. It sets the inputText state variable to the current value of the input field.
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // handles the event when a diary entry is submitted. If a day is selected, it adds the input text to the entries state variable, adds the input text to the listItems state variable, and then clears the inputText, selectedDay, and listItems state variables.
  const handleEntrySubmit = (e) => {
    e.preventDefault();
    if (selectedDay) {
      setEntries({
        ...entries,
        [selectedDay.toDateString()]: inputText
      });
      setListItems([...listItems, inputText]); // Add the new entry to the listItems state
      setInputText('');
      setSelectedDay(null); // Clear the selected day
      setListItems([]); // Clear the listItems state after submitting an entry
    }
  };

  // Function to delete an entry, It removes the entry for the specified date from the entries state variable.
  const handleDeleteEntry = (date) => {
    const newEntries = {...entries};
    delete newEntries[date];
    setEntries(newEntries);
  };
  
// renders the component. It includes the MonthYear component and a form for submitting diary entries. 
// maps over the days state variable to render each day, and over the entries state variable to render each diary entry. 
//The onMonthChange and onYearChange props of the MonthYear component are used to update the currentDate state variable when the month or year is changed.
  return (
    <>
        <MonthYear 
            onMonthChange={(newMonthIndex) => {
                const newDate = new Date(currentDate.getFullYear(), newMonthIndex, 1);
                setCurrentDate(newDate);
                setSelectedDay(null);
            }}
            onYearChange={(newYear) => {
                const newDate = new Date(newYear, currentDate.getMonth(), 1);
                setCurrentDate(newDate);
                setSelectedDay(null); // Clears the entry list when you click the month or year buttons when it is displayed
            }}
        />

        <div className="daysContainer" style={{width: '95%', margin: '20px auto'}}>
            {days.map((item, index) => (
                <div key={index}>
                    {item.days.map((day, i) => (
                        <div className='day' key={i} onClick={() => handleDayClick(day)} style={selectedDay && selectedDay.toDateString() === day.toDateString() ? {backgroundColor: '#B2EBF2'} : {}}>
                            {day.getDate()}
                            {entries[day.toDateString()] && <span>💌</span>}
                        </div>
                    ))}
                </div>
            ))}
        </div>

        <div style={{width: '80%', margin: '20px auto'}}>
        {(!selectedDay || !entries[selectedDay.toDateString()]) && 
          <form  onSubmit={handleEntrySubmit} style={{width: '80%', margin: '20px auto'}}>
            <textarea 
              type='text'
              placeholder="Enter a diary entry..."
              value={inputText}
              onChange={handleInputChange}
              style={{display: 'block'}}>
              </textarea> 
            <button className='submit' type='submit'>
              Submit
            </button>
          </form>
}
          {selectedDay && entries[selectedDay.toDateString()] && 
          
          <div className="entryList">
            <ul style={{listStyleType: 'none'}}>
              {Object.entries(entries).map(([date, entry], index) => (
                
                <li className="eList" key={index} >
                    <span className="delete" onClick={() => handleDeleteEntry(date)} >❌</span>
                  
                  <div className="listEdit">
                  <div className="break">{date}:</div> 
                  <div className="breakEntry">{entry}</div>
                  </div>

                </li>
              ))}
            </ul>
          </div>}
        </div>
    </>
  );
}
