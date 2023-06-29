import React from "react";
import { useState, useEffect } from "react";
import PlayZone from "./components/PlayZone";
import PlayZone2 from "./components/PlayZone 2";
import PlayZone3 from "./components/PlayZone 3";
import PlayZone4 from "./components/PlayZone 4";

import StartPage from "./components/StartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentWord, setCurrentWord] = useState(["w", "o", "r", "d"]);
  const [choosenLetter, setChoosenLetter] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(0);

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const newGame = () => {
    setCurrentWord(["w", "o", "r", "d"]);
    setChoosenLetter([]);
    setCount(0);
    setTurn(0);
      

  }



  const choosenLeters = (letter: string): void => {
    if (count === 9) {
      return;
    }
    if (choosenLetter.includes(letter)) {
      return
    }
    if (!currentWord.includes(letter)) {

      setCount(preevCount => preevCount + 1);
    }
    setChoosenLetter(preevLetters => {
      return [...preevLetters, letter]
    });
  }


  // STYLING
  const letterStyling = (l: string): string => {
    if (choosenLetter.includes(l)) {
      return "letter"
    } else {
      return "letter hidden"
    }
  }
  const btnStyling = (l: string): string => {
    if (choosenLetter.includes(l)) {
      return "letter-choosen none"
    } else {
      return "letter-choosen "
    }
  }
  const newGameStyling = (): string => {
    if (count === 9) {
      return "new-game "
    } else {
      return "new-game none"
    }
  }
  const manChangeStyling = () => {
    if (count === 0) {
      return "./image/90.png"
    }
    if (count === 1) {
      return "./image/0.png"
    }
    else if (count === 2) {
      return "./image/1.png"
    }
    else if (count === 3) {
      return "./image/2.png"
    }
    else if (count === 4) {
      return "./image/3.png"
    }
    else if (count === 5) {
      return "./image/4.png"
    }
    else if (count === 6) {
      return "./image/5.png"
    }
    else if (count === 7) {
      return "./image/6.png"
    }
    else if (count === 8) {
      return "./image/7.png"
    }
    else if (count === 9) {
      return "./image/7z.png"
    }
  }

  
	
  // 



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />

          <Route path="/PlayZone" element={<PlayZone
            currentWord={currentWord} count={count} letterStyling={letterStyling} btnStyling={btnStyling} alphabet={alphabet} choosenLeters={choosenLeters} manChangeStyling={manChangeStyling}
          />} />

          <Route path="/PlayZone2" element={<PlayZone2
            currentWord={currentWord} count={count} letterStyling={letterStyling} btnStyling={btnStyling} alphabet={alphabet} choosenLeters={choosenLeters} manChangeStyling={manChangeStyling} 
            setTurn = {setTurn} turn={turn}
            choosenLetter = {choosenLetter}
            
          />} />

          <Route path="/PlayZone3" element={<PlayZone3
            currentWord={currentWord} count={count} letterStyling={letterStyling} btnStyling={btnStyling} alphabet={alphabet} choosenLeters={choosenLeters} manChangeStyling={manChangeStyling} 
            setTurn = {setTurn} turn={turn}
            choosenLetter = {choosenLetter}
          />} /> 
          <Route path="/PlayZone4" element={<PlayZone4
          currentWord={currentWord} count={count} letterStyling={letterStyling} btnStyling={btnStyling} alphabet={alphabet} choosenLeters={choosenLeters} manChangeStyling={manChangeStyling} 
          setTurn = {setTurn} turn={turn}
          choosenLetter = {choosenLetter}
          />} /> 

        </Routes>
      </BrowserRouter>



      <div className={newGameStyling()}>
        <h2 className="new-game__tittle">You lused</h2>
        <button className="new-game-btn"
          onClick={() => newGame()}>

          New game
        </button>

      </div>




    </div>
  )
}

export default App;
