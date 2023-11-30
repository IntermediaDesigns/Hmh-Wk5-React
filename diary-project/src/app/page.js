"use client";

import Days from "./days.jsx";
import DiaryEntry from "./diaryEntry.jsx";

export default function Home() {
  return (
    <main>
      <h1>Diary</h1>
      
      <div>
      <Days/>
      </div>
      
      <DiaryEntry/>

    </main>
  )
}
