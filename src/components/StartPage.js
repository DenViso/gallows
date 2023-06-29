import { useState } from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
	const [choosePlayer, setChoosePlayer] = useState(0);

	const playerChoosen = (id) => {
		setChoosePlayer(id);
	};

	const play = () => {
		if (choosePlayer === 1) {
			return (
				<Link className="start " to="/PlayZone">
					Start
				</Link>
			);
		} else if (choosePlayer === 2) {
			return (
				<Link className="start" to="/PlayZone2">
					Start
				</Link>
			);
		} else if (choosePlayer === 3) {
			return (
				<Link className="start" to="/PlayZone3">
					Start
				</Link>
			);
		} else if (choosePlayer === 4) {
			return (
				<Link className="start" to="/PlayZone4">
					Start
				</Link>
			);
		}
	};
	console.log(choosePlayer);
	return (
		<div className="btn">
			<div className="btn-conteiner">
				<button id="1" className={choosePlayer === 1?"pl active" : "pl"} onClick={() => playerChoosen(1)}>
					1 player
				</button>

				<button id="3" className={choosePlayer === 3?"pl active" : "pl"} onClick={() => playerChoosen(3)}>
					3 player
				</button>

				<button id="2" className={choosePlayer === 2?"pl active" : "pl"} onClick={() => playerChoosen(2)}>
					2 player
				</button>

				<button id="4" className={choosePlayer === 4?"pl active" : "pl"} onClick={() => playerChoosen(4)}>
					4 player
				</button>
			</div>

			
				{play()}
			
		</div>
	);
};

export default StartPage;
