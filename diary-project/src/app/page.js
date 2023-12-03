'use client'
import { useState } from 'react'
import Days from '../components/Days.jsx'
import MonthYear from '@/components/monthsYears.jsx'
import Form from '@/components/Form.jsx'

export default function Home () {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState([])
  const [entries, setEntries] = useState({})
  const [selectedDay, setSelectedDay] = useState(null)
  const [inputText, setInputText] = useState('')
  const [listItems, setListItems] = useState([])

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

  // Initialize current month and year index to today's month and year
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    currentDate.getMonth()
  )

  const [currentYearIndex, setCurrentYearIndex] = useState(
    years.findIndex(y => y.year === currentDate.getFullYear())
  )


  return (
    <main>
      <h1>Diary</h1>

      <MonthYear
        months={months}
        years={years}
        currentMonthIndex={currentMonthIndex}
        setCurrentMonthIndex={setCurrentMonthIndex}
        currentYearIndex={currentYearIndex}
        setCurrentYearIndex={setCurrentYearIndex}
        onMonthChange={newMonthIndex => {
          const newDate = new Date(currentDate.getFullYear(), newMonthIndex, 1)
          setCurrentDate(newDate)
          setSelectedDay(null)
        }}
        onYearChange={newYear => {
          const newDate = new Date(newYear, currentDate.getMonth(), 1)
          setCurrentDate(newDate)
          setSelectedDay(null) // Clears the entry list when you click the month or year buttons when it is displayed
        }}
      />

      <div>
        <Days
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          days={days}
          setDays={setDays}
          entries={entries}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setListItems={setListItems}
        />

        <Form
        entries={entries}
          setEntries={setEntries}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          inputText={inputText}
          setInputText={setInputText}
          listItems={listItems}
          setListItems={setListItems}
        />
      </div>
    </main>
  )
}
