"use client";
import { useState } from 'react';
import Image from 'next/image'
import defaultPlanets from "./lib/planets.jsx"
import Divider from './components/divider.jsx';


export default function Home() {
  const [planets, setPlanets] = useState(defaultPlanets);
  
  
  
  
  
  return (
    <main>
      <br />
      <p>1</p>
      <Divider />
      <div className='square'></div>
      <br />
      
      <p>2</p>
      <Divider />

      
      <div className='imgContainer' style={{ position: 'relative', width: '100%', height: '1000px'}}>
        <Image src={'/meme.png'} 
        layout='fill'
        style={{ objectFit: "cover" }}
        />
      </div>
      <br />

      <p>3</p>
      <Divider />
      <br />
      <h3>Alien Planets</h3>
      
      <div className='planetsContainer'>

      {Array.isArray(planets) && planets.map((planet) => {
          return (
            
            <div className='alienPlanetInfo'>
              <p className='emojiImg'>{planet.emoji}</p>

              <p className='planetName'>{planet.name}</p>

              <p>{planet.name} is {planet.distanceFromEarth}
               from earth. {planet.name} is believed to {planet.hasLife === true ? ' have life.' : ' not have life.'}

               The atmosphere of {planet.name} is {planet.atmosphere}.              
              </p>

            </div>  
          )


      })};
      </div>


    </main>
  )
}
