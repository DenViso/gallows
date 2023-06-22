import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [currentWord, setCurrentWord] = useState(["w", "o", "r", "d"]);
  const [choosenLetter, setChoosenLetter] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const newGame = () => {
    setCurrentWord(["w", "o", "r", "d"]);
    setChoosenLetter([]);
    setCount(0);
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


  return (
    <div className="App">
      <div className="wrapper">
        <div className="word-section">
          {currentWord.map((letter) => {
            return <h2 className={letterStyling(letter)} >{letter}</h2>
          })}
        </div>
        <div className="letter-section">
          {alphabet.map((l) => {
            return <button onClick={() => choosenLeters(l)} className={btnStyling(l)}>{l}</button>
          })}
        </div>
        <div className="count-section ">
          <h3 className="count">You have wrong letters {count}/9 </h3>
        </div>
      </div>

      <div className={newGameStyling()}>
        <h2 className="new-game__tittle">You loser(</h2>
        <button className="new-game-btn"
          onClick={() => newGame()}>

          New game
        </button>

      </div>
    </div>
  )
}

export default App;
