import React from 'react';
import "./app.css"
import kiwi from './Assets/kiwi.png'
import apple from './Assets/apple.png'
import apricot from './Assets/apricot.png'
import avocado from './Assets/avocado.png'
import banana from './Assets/banana.png'
import blueberry from './Assets/blueberry.png'
import peach from './Assets/peach.png'
import persimon from './Assets/persimon.png'
import pear from './Assets/pear.png'
import papaya from './Assets/papaya.png'
import coconut from './Assets/coconut.png'
import cherry from './Assets/cherry.png'
import watermelon from './Assets/watermelon.png'

const fruits = [
 
  {
    id:1,
    img:apple,
    name:"Apple"
  },
  {
    id:2,
    img:avocado,
    name:"Avocado"
  },
  {
    id:3,
    img:banana,
    name:"Banaana"
  },
  {
    id:4,
    img:blueberry,
    name:"Blueberry"
  },
  {
    id:5,
    img:apricot,
    name:"Apricot"
  },
  {
    id:6,
    img:coconut,
    name:"Kiwi "
  },
  {
    id:7,
    img:pear,
    name:"Kiwi "
  },
  {
    id:8,
    img:papaya,
    name:"Kiwi "
  },
  {
    id:9,
    img:persimon,
    name:"Kiwi "
  },
  {
    id:10,
    img:cherry,
    name:"Kiwi "
  },
  {
    id:11,
    img:peach,
    name:"Kiwi "
  },
  {
    id:12,
    img:watermelon,
    name:"watermelon "
  }


]

export const App =() => {
  return (
    <div >
      <h1>Fruits list</h1>
      <div className='fruits'>
      {fruits.map((val,index) => (
        <div >
          <img className='sizeFruit' src={val.img} alt="Fruit image"/>
          <p className='textFruit'>{val.name}</p>
        </div> 
      ))}
      </div>
    </div>
    )
}

export default App;