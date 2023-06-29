import { useState, useEffect } from "react";

const PlayZone = ({
	currentWord,
	choosenLeters,
	count,
	letterStyling,
	btnStyling,
	alphabet,
	manChangeStyling,
  setTurn,
  turn,
  choosenLetter
}) => {
  


	useEffect(() => {
    if (turn === 2) {
      setTurn(1);
    }
    if (turn === 0) {
      setTurn(turn + 1);
    }
		if (turn === 1) {
      setTurn(turn + 1);
		}
		
			}, [choosenLetter])

  
 
 

	return (
		<div className="wrapper">
			{/* hiden word */}
			<div className="word-section">
				{currentWord.map((letter) => {
					return (
						<h2 key={letter} className={letterStyling(letter)}>
							{letter}
						</h2>
					);
				})}
			</div>
			{/* player btn */}
			<div className="player2">
				{/* player 1 */}
				<button id="1" className={turn === 1 ? "btn-2 active" : "btn-2"}>
					1 player
				</button>
				<button id="2" className={turn === 2 ? "btn-2 active" : "btn-2"}>
					2 player
				</button>
			</div>
			{/* alphabet */}
			<div className="letter-section">
				{alphabet.map((l) => {
					return (
						<button
							key={l}
							onClick={() => choosenLeters(l)}
							className={btnStyling(l)}>
							{l}
						</button>
					);
				})}
			</div>
			{/* counter  */}
			<div className="count-section ">
				<h3 className="count">You have wrong letters {count}/9 </h3>
			</div>
			{/* picture man */}
			<div className="pic">
				<div className="pic-main">
					<img src={manChangeStyling()} alt="" className="man" />
				</div>
			</div>
		</div>
	);
};

export default PlayZone;
