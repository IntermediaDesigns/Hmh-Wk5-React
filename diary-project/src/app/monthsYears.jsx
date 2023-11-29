import { useState } from 'react'

export default function MonthYear () {
  const [months, setMonth] = useState([
    { id: 1, month: 'January' },
    { id: 2, month: 'February' },
    { id: 3, month: 'March' },
    { id: 4, month: 'April' },
    { id: 5, month: 'May' },
    { id: 6, month: 'June' },
    { id: 7, month: 'July' },
    { id: 8, month: 'August' },
    { id: 9, month: 'September' },
    { id: 10, month: 'October' },
    { id: 11, month: 'November' },
    { id: 12, month: 'December' }
  ])

  const [years, setYear] = useState(
    Array.from({ length: 26 }, (_, i) => ({ year: 2010 + i }))
  )

  // Get current date
  const currentDate = new Date()

  // Initialize current month and year index to today's month and year
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth()
  )

  const [currentYearIndex, setCurrentYearIndex] = useState(
    years.findIndex(y => y.year === currentDate.getFullYear())
  )

  // Function to handle month change
  const handleMonthChange = direction => {
    let newIndex =
      direction === 'next' ? currentMonthIndex + 1 : currentMonthIndex - 1
    if (newIndex < 0) {
      newIndex = months.length - 1
      handleYearChange('prev')
    } else if (newIndex >= months.length) {
      newIndex = 0
      handleYearChange('next')
    }
    setCurrentMonthIndex(newIndex)
  }

  // Function to handle year change
  const handleYearChange = direction => {
    let newIndex =
      direction === 'next' ? currentYearIndex + 1 : currentYearIndex - 1
    if (newIndex < 0) {
      newIndex = years.length - 1
    } else if (newIndex >= years.length) {
      newIndex = 0
    }
    setCurrentYearIndex(newIndex)
  }

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
