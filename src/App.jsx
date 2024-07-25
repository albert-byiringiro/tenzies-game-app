import Die from "./components/Die";
import { useEffect, useState} from "react";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

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



const [tenzies, setTenzies] = useState(false);


useEffect(()=>{
  const isHandled = dice1.every(die => die.isHeld);
  const firstValue = dice1[0].value;
  const sameValue = dice1.every(die => firstValue === die.value);

  if (isHandled && sameValue) {
    setTenzies(true);
  }
}, [dice1])
  



  const rollDice = () => {

  if (!tenzies) {
    setdice1(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateDie();
    }))
  }  else {
    setTenzies(false);
    setdice1(allNewDice1());
  }

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

  
  const conf = () => {
    return (
      <Confetti/>
    )
  }
  
  return (
    
    <main className='bg-white h-[500px] w-[800px] flex flex-col justify-center items-center'>
      {tenzies && conf()}
      <h1 className="m-0 text-4xl font-semibold text-gray-900">Tenzies</h1>
      <p className="mt-0 font-normal text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid grid-cols-5 grid-rows-2 gap-5 mt-8">
        {diceDisplay1}
      </div>
      <button className="bg-[#5035FF] text-white px-10 py-2 mt-10 text-3xl font-semibold text-center cursor-pointer rounded-md" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>    

  )
}
