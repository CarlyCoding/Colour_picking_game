import './App.css';
import {useState} from 'react'


function randomColour(){
  const source = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let result = '';
  // Start at zero, then is 0 less than five, then runs the loop then increments on 1 (adds on to 1)
  for (let i =0; i<6;i++) {
  // Math random gives you back a percentage between 0 and 1, so you need to floor it and also 
  // multiply by the list length to get the relative item from the list ie. 0== first element
  // and 1== last element. 0.5 == the middle of the list etc.
  // Remember because array starts at 0 to -1 to get the result you want. 
    result += source[Math.floor(Math.random() * (source.length-1))]
  }
  return `#${result}`
}

function reloadPage(){
  window.location.reload();
}

function App() {
  
  // As soon as the app runs, we set the state straight away.
  const [colourOne, setColourOne] = useState(randomColour())
  const [colourTwo, setColourTwo] = useState(randomColour())
  const [colourThree, setColourThree] = useState(randomColour())
  const [correctColour, setCorrectColour] = useState([colourOne,colourTwo,colourThree][Math.floor(Math.random() * 2)])
  const [message, setMessage] = useState()

  const handleClick= (clickedColour) => {
      if (clickedColour === correctColour){
        setMessage("You guessed correctly! ")
      }
      else{
        setMessage("Try again that was incorrect!")
      }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Colour Guessing App! </h1>
      </header>
      <div className='ColourBox'>
        {/* Setting background colour dynamically, called in line styling */}
        <div id='Box' style={{'backgroundColor': correctColour}}></div>
        <h2>Guess the colour swatch?</h2>
      </div>
      
      <div className='Buttons'>
        <button onClick={() => handleClick(colourOne)}>{colourOne}</button>
        <button onClick={() => handleClick(colourTwo)}>{colourTwo}</button>
        <button onClick={() => handleClick(colourThree)}>{colourThree}</button>
      </div>
      <span>{message}</span>
      <div className='Reset'>
        <button type='submit' onClick={reloadPage}> Play again!</button>
      </div>
    </div>
  );
}

export default App;
