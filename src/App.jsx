import Die from "./components/Die";
import { useEffect, useState} from "react";
import {nanoid} from "nanoid"

export default function App() {

  const generateDie = () => {
    return {
      id: nanoid(), 
      value: Math.ceil(Math.random() * 6), 
      isHeld: false}
  }

  const allNewDice1 = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(generateDie())
    }
    return diceArray
  } 
 
  
  const [dice1, setdice1] = useState(allNewDice1)


  /**
 * Challenge:
 * 1. Add new state called `tenzies`, default to false. It
 *    represents whether the user has won the game yet or not.
 * 2. Add an effect that runs every time the `dice` state array 
 *    changes. For now, just console.log("Dice state changed").
 */
const [tenzies, setTenzies] = useState(false);


/**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */
useEffect(()=>{
  const isHandled = dice1.every(die => die.isHeld);
  const firstValue = dice1[0].value;
  const sameValue = dice1.every(die => firstValue === die.value);

  if (isHandled && sameValue) {
    setTenzies(true);
    console.log("Won!");
  }
}, [dice1])
  



  const handlerRoll = () => {
    setdice1(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateDie();
    }))
  }
  

  

  const holdDice = (id) => {
    setdice1(prevDice => {
      return prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)
    })
  }
  
  const diceDisplay1 = dice1.map(die => {
    return <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      holdDice={() => holdDice(die.id)} />
  })
  
  return (
    
    <main className='bg-white h-[500px] w-[800px] flex flex-col justify-center items-center'>
      <h1 className="m-0 text-4xl font-semibold text-gray-900">Tenzies</h1>
      <p className="mt-0 font-normal text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid grid-cols-5 grid-rows-2 gap-5 mt-8">
        {diceDisplay1}
      </div>
      <button className="bg-[#5035FF] text-white px-10 py-2 mt-10 text-3xl font-semibold text-center cursor-pointer rounded-md" onClick={handlerRoll}>Roll</button>
    </main>    

  )
}
