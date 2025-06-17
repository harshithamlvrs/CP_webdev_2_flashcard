import { useState } from 'react'
import './App.css'

//list of questions and answers
const qaList = [
  {
    question: `In 2004, “thefacebook” was launched as a social networking site for Harvard by students led by which computer programming student who later dropped out to become the face of the site?`,
    answer: 'Mark Zuckerberg'
  },
  {
    question: `When a password is limited strictly to numeric characters, the secret is often referred to as a PIN. What does that acronym stand for?`,
    answer: 'Personal Identification Number'
  },
  {
    question: `On the market for four decades, AutoCAD is a specific brand of CAD software. CAD stands for "Computer-Aided" WHAT?`,
    answer: 'Design'
  },
  {
    question: `You probably see it every day, but how many different colors are used in the lettering of Google's logo?`,
    answer: 'Four (Blue, Red, Green, and Yellow)'
  },
  {
    question: `Which two-word term describes computer code that is freely available for distribution and modification, based on a philosophy of improvement through sharing and collaboration?`,
    answer: 'Open Source'
  },
  {
    question: `Doug Engelbart was the inventor of what computer accessory? The first one was made from wood.`,
    answer: 'Mouse'
  },
  {
    question: `The "man without a head" is the emblem of what Guy Fawkes-lovin' hacker group that reemerged in 2020?`,
    answer: 'Anonymous'
  },
  {
    question: `Ajay Bhatt in 1995 developed what commonly used computer connector that did not give him a single cent of his invention?`,
    answer: 'USB'
  },
  {
    question: `In 1988, the Morris Worm was created (and released) just to see whether it could be pulled off. As it spread via the Internet, mayhem (and a criminal conviction) followed. It was the first major example of which “highly infectious” computer security threat?`,
    answer: 'Virus'
  },
  {
    question: `It sounds like a circus performer from Taos and allows you to download PDFs with the greatest of ease. I'm talking about what A-word family of software?`,
    answer: 'Adobe Acrobat'
  }
];

const App = () => {
  /* state variable called count to keep track of count */
  const [count, setCount] = useState(0); //initial val is 0, starts counting from 0

  /* state variable called face */
  const [flip, setFlip] = useState('false'); //initial value is false

  const handleNext = () => { 
    setCount(count + 1);
        let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * qaList.length);
    } while (randomIndex==count); //for avoiding a repetition

    setCount(randomIndex);
    setFlip(true); //reseting to question 

  } //move to next card

  const handlePrev = () => { 
    setCount(count - 1); 
    
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * qaList.length);
    } while (randomIndex==count); //for avoiding a repetition

    setCount(randomIndex);
    setFlip(true); //reseting to question
  } //move to previous card

  const updateFlip = () => setFlip(prev=>!prev); //for flippin b/w questions and answers

  return (
    <div className="App">
      <div className="header">
        <h1> Computer Science Trivia </h1>
        <h2> This Trivia will test your knowledge on different aspects of Computer Science (C.S.) </h2>
        <p> <i> Click on the card to reveal the answer! </i></p>
        <h4> Total Number of Questions: {qaList.length} </h4>

      </div>
      
      <div className='container'> 
        {flip ? (<h2 onClick={updateFlip}> Question: {qaList[count].question} </h2>) :
         (<h2 onClick={updateFlip}> Answer: {qaList[count].answer} </h2>)}
        {/* flip is a boolean variable, if true, execute first part, if false, 
        execute the 2nd part after colon */}

        <button onClick={handlePrev}> Previous </button>
        <button onClick={handleNext}> Next </button>
      </div>
    </div>
  )
}

export default App
