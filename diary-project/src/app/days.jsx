import { useState, useEffect } from 'react'

export default function Days () {
  const [days, setDays] = useState([])

  // Function to generate days for the current month and year
  const generateDays = () => {
    let daysArray = []
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let date = new Date(currentYear, currentMonth, 1)
    let daysInMonth = []
    while (date.getMonth() === currentMonth) {
      daysInMonth.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }
    daysArray.push({
      year: currentYear,
      month: currentMonth,
      days: daysInMonth
    })
    setDays(daysArray)
  }

  // Call generateDays function on component mount
  useEffect(() => {
    generateDays()
  }, [])

  return (
    
      <div
        className='daysContainer'
        style={{ width: '95%', margin: '20px auto' }}
      >
        {days.map((item, index) => (
          <div key={index}>
            {item.days.map((day, i) => (
              <div className='day' key={i}>
                {day.getDate()}
              </div>
            ))}
          </div>
        ))}
      </div>
    
  )
}
