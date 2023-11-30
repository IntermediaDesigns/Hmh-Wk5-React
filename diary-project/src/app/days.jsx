import { useState, useEffect } from "react";
import MonthYear from './monthsYears.jsx';
import DiaryEntry from './DiaryEntry.jsx';

export default function Days() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [entries, setEntries] = useState({});
    const [selectedDay, setSelectedDay] = useState(null);
    

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
        daysArray.push({ year: currentYear, month: currentMonth, days: daysInMonth });
        setDays(daysArray);
    };

    // Call generateDays function on component mount and when currentDate changes
    useEffect(() => {
        generateDays(currentDate);
    }, [currentDate]);

    const handleDayClick = (day) => {
        setSelectedDay(day);
        
    };

    
    const handleEntrySubmit = (entry) => {
        setEntries({
            ...entries,
            [selectedDay.toDateString()]: entry
        });
        setSelectedDay(null);
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
                            {entries[day.toDateString()] && <span onClick={() => alert(entries[day.toDateString()])}>💌</span>}
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
