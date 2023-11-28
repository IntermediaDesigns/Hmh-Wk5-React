"use client";
import Divider from "@/components/Divider.jsx"
import Togglebox from "./togglebox.jsx"
import Mirror from "./mirror.jsx";
import Counter from "./counter.jsx";
import Car from "./race.jsx";
import Timer from "./stopwatch.jsx";

{/* This is an inline comment in JSX */}
// This is a JavaScript comment within a code block in JSX

export default function Home() {
  return (
    <main>
      
      <h1>Day 10</h1>
      <Divider />

      <h1>Toggle the Box</h1>
      <Togglebox/>
      <Divider />
      
      <h1>Mirror</h1>
      <Mirror/>
      <Divider />
      
      <h1>Counter</h1>
      <Counter/>
      <Divider />
      
      <h1>Race</h1>
      <p>Move car to the right by pressing the right arrow</p>
      <Car/>
      <Divider />

      <h1>Stopwatch</h1>
      <Timer/>

    </main>
  )
}
