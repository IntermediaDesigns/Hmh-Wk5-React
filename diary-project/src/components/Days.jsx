import { useEffect } from 'react';

export default function Days({currentDate, days, setDays, entries, selectedDay, setSelectedDay, setListItems }) {
  

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

  

// maps over the days state variable to render each day, and over the entries state variable to render each diary entry. 
//The onMonthChange and onYearChange props of the MonthYear component are used to update the currentDate state variable when the month or year is changed.
  return (
    <>
        
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

    </>
  );
}
