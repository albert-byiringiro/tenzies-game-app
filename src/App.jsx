import Die from "./components/Die";
import { useState, useEffect, useId } from "react";

export default function App() {

  
  /**
   * Challenge:
   * 
   * Create state to hold our array of numbers. (Initialize
   * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const calculateRandom = Math.ceil(Math.random() * 6)
      diceArray.push(calculateRandom)
    }
    return diceArray
  } 

  
  const [dice, setdice] = useState(allNewDice)
  
  const diceDisplay = dice.map((die, index) => {
    return <Die key={index} value={die}/>
  })

  console.log(diceDisplay)
  
  return (
    <main className='bg-white h-[500px] w-[800px] flex flex-col justify-center items-center'>
      <div className="grid grid-cols-5 grid-rows-2 gap-5">
        {diceDisplay}
      </div>
    </main>    

  )
}
