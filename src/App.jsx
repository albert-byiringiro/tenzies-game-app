/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

import Die from "./components/Die";

export default function App() {
  
  /**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const calculateRandom = Math.floor(Math.random() * 6) + 1
      diceArray.push(calculateRandom)
    }
    return diceArray
  } 

  console.log(allNewDice())
  
  return (
    <main className='bg-white h-[500px] w-[800px] flex flex-col justify-center items-center'>
      <div className="grid grid-cols-5 grid-rows-2 gap-5">
      <Die value="1"/>
      <Die value="2"/>
      <Die value="3"/>
      <Die value="4"/>
      <Die value="5"/>
      <Die value="6"/>
      <Die value="7"/>
      <Die value="8"/>
      <Die value="9"/>
      <Die value="10"/>
      </div>
    </main>    

  )
}
