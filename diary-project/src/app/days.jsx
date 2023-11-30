import { useState, useEffect } from 'react';
import MonthYear from './monthsYears.jsx';

export default function Days() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [entries, setEntries] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  // Function to generate days for the current month and year
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

  // Call generateDays function on component mount and when currentDate changes
  useEffect(() => {
    generateDays(currentDate);
  }, [currentDate]);

  const handleDayClick = (day) => {
    if (selectedDay && selectedDay.toDateString() === day.toDateString()) {
        setSelectedDay(null); // Clear the selected day if it's the same as the clicked day
    } else {
        setSelectedDay(day);
        setListItems([]); // Clear the listItems state when another day is clicked
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

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

  // Function to delete an entry
  const handleDeleteEntry = (date) => {
    const newEntries = {...entries};
    delete newEntries[date];
    setEntries(newEntries);
  };
  

  return (
    <>
        <MonthYear 
            onMonthChange={(newMonthIndex) => {
                const newDate = new Date(currentDate.getFullYear(), newMonthIndex, 1);
                setCurrentDate(newDate);
            }}
            onYearChange={(newYear) => {
                const newDate = new Date(newYear, currentDate.getMonth(), 1);
                setCurrentDate(newDate);
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
            <input 
              type='text'
              placeholder="Enter a diary entry..."
              value={inputText}
              onChange={handleInputChange}
              style={{display: 'block'}}
            />
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
                  <div className="break">{date}: <br/><br/>{entry}</div>
                  
                </li>
              ))}
            </ul>
          </div>}
        </div>
    </>
  );
}
