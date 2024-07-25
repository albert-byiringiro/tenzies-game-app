import Die from "./components/Die";
import { useState} from "react";
import {nanoid} from "nanoid"

export default function App() {

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

  const allNewDice1 = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const calculateRandom = Math.ceil(Math.random() * 6)
      let diceObject = {id: nanoid(), value: calculateRandom, isHeld: true}
      diceArray.push(diceObject)
    }
    return diceArray
  } 
 
  
  const [dice1, setdice1] = useState(allNewDice1)


  const handlerRoll = () => {
    setdice1(allNewDice1)
  }

  const diceDisplay1 = dice1.map(die => {
    console.log(die.isHeld)
    return <Die key={die.id} value={die.value} isHeld={die.isHeld}/>
  })


  
  
  return (
    <main className='bg-white h-[500px] w-[800px] flex flex-col justify-center items-center'>
      <div className="grid grid-cols-5 grid-rows-2 gap-5">
        {diceDisplay1}
      </div>
      <button className="bg-[#5035FF] text-white px-10 py-2 mt-10 text-3xl font-semibold text-center cursor-pointer rounded-md" onClick={handlerRoll}>Roll</button>
    </main>    

  )
}
