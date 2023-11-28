"use client";
import { useState } from 'react';
import Image from 'next/image'
import defaultPlanets from "../app/lib/planets.jsx"
import Divider from './components/divider.jsx';


export default function Home() {
  
  
  
  
  
  
  return (
    <main>
      
      <p>1</p>
      <Divider />
      <div className='square'></div>

      <p>2</p>
      <Divider />

      <div style={{ position: "relative" }}>
        <Image src={'/meme.png'} 
        layout='fill'
        style={{ objectFit: "cover" }}
        />
      </div>

      <p>3</p>
      <Divider />












    </main>
  )
}
