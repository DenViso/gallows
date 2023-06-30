
import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import PlayZone from "./components/PlayZone";
// import PlayZone2 from "./components/PlayZone 2";
// import PlayZone3 from "./components/PlayZone 3";
// import PlayZone4 from "./components/PlayZone 4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [currentWord, setCurrentWord] = useState(["w", "o", "r", "d"]);
  const [choosenLetter, setChoosenLetter] = useState<string[]>([]);
  const [choosePlayer, setChoosePlayer] = useState(0);
  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState(1);
  const [player, setPlayer] = useState(4);
  const [includes, setIncludes] = useState(false);
  //  const [frezzed, setFrezzed] = useState(turn === 1);



  const newGame = () => {
    setCurrentWord(["w", "o", "r", "d"]);
    setChoosenLetter([]);
    setCount(0);
    setTurn(1);
    setPlayer(4);
    setIncludes(false);
  }

  console.log(count);
  console.log(turn);
  console.log(player);
  console.log(includes);
  console.log(choosePlayer);


  const changeCurrentPlayer = () => {
    if (turn < player) {
      setTurn((prevTurn) => prevTurn + 1);
    } else if (turn === player) {
      return setTurn(1);
    }
  };

  const choosenLeters = (letter: string): void => {
    if (count === 9) {
      return;
    }
    if (choosenLetter.includes(letter)) {
      return;
    }
    if (!currentWord.includes(letter)) {
      setCount((preevCount) => preevCount + 1);
      changeCurrentPlayer();
    }
    setChoosenLetter((preevLetters) => {
      return [...preevLetters, letter];
    });
  };

  const createPlayers = () => {
    let button = [];
    for (let i = 0; i < choosePlayer; i++) {
      button.push(
        <button
          key={i}
          id={"" + i}
          className={
            turn === i + 1
              ? `btn-2 p${i + 1} active`
              : `btn-2 p${i + 1}`}>
          {i + 1} player
        </button>)
    }
    return button
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

  const areAllLettersChosen = currentWord.every(letter => choosenLetter.includes(letter));

  useEffect(() => {
    if (areAllLettersChosen) {

      setIncludes(true);
    } else {

      setIncludes(false);
    }
  }, [choosenLetter])

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage
            setChoosePlayer={setChoosePlayer}
            choosePlayer={choosePlayer}
            setPlayer={setPlayer}
          // newGame = {newGame}
          />} />

          <Route path="/PlayZone" element={<PlayZone
            currentWord={currentWord}
            count={count}
            letterStyling={letterStyling}
            btnStyling={btnStyling}
            newGame={newGame}
            choosenLeters={choosenLeters}
            manChangeStyling={manChangeStyling}
            setChoosenLetter={setChoosenLetter}
            choosenLetter={choosenLetter}
            changeCurrentPlayer={changeCurrentPlayer}
            setCount={setCount}
            setTurn={setTurn}
            player={player}
            turn={turn}
            createPlayers={createPlayers}
          />} />

        </Routes>
      </BrowserRouter>

      <div className={count === 9 || includes ? "new-game " : "new-game none"}>
        {count === 9
          ? <h2 className="new-game__tittle">You lused</h2>
          : <h2 className="new-game__tittle">The winner is player {turn} !</h2>}

        <button
          className="new-game-btn"
          onClick={() => newGame()}>
          New game
        </button>

      </div>

    </div>
  )
}

export default App;
