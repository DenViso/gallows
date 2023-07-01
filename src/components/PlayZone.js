import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const PlayZone = ({
	currentWord,
	count,
	letterStyling,
	btnStyling,
	newGame,
	manChangeStyling,
	setChoosenLetter,
	choosenLetter,
	setCount,
	player,
	turn,
	setTurn,
	changeCurrentPlayer,
	createPlayers,
	choosenLeters,
	choosePlayer,
}) => {

	const nav = useNavigate();

	useEffect(() => {
		if (choosePlayer === 0) {
			nav ("/");
		}
	}, []);

	return (
		<div className="wrapper">
			<div className="word-section">
				{currentWord.map((letter) => {
					return (
						<h2 key={letter} className={letterStyling(letter)}>
							{letter}
						</h2>
					);
				})}
			</div>

			<div className="player2">
				{/* player */}

				{createPlayers()}
			</div>

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
			<div className="count-section ">
				<h3 className="count">You have wrong letters {count}/9 </h3>
			</div>
			<div className="pic">
				<div className="pic-main">
					<img src={manChangeStyling()} alt="" className="man" />
				</div>
			</div>
			<Link
				className="back"
				to="/"
				// onClick={() => newGame()}
			>
				Back
			</Link>
		</div>
	);
};

export default PlayZone;
