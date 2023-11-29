"use client";

import Days from "./days.jsx";
import DiaryEntry from "./diaryEntry.jsx";
import MonthYear from "./monthsYears.jsx";


export default function Home() {
  return (
    <main>
      <h1>Diary</h1>
      
      <MonthYear/>
      
      <div>
      <Days/>
      </div>
      
      <DiaryEntry/>


    </main>
  )
}
