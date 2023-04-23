import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import victorySound from "../../sounds/victory.mp3";
import defeatSound from "../../sounds/defeat.mp3";
import drawSound from "../../sounds/draw.mp3";

interface IProps {
  score: number;
  myChoice: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Game = (props: IProps) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (props.myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
      new Audio(victorySound).play();
    } else if (props.myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
      new Audio(defeatSound).play();
    } else if (props.myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
      new Audio(victorySound).play();
    } else if (props.myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
      new Audio(defeatSound).play();
    } else if (props.myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      props.setScore(props.score + 1);
      new Audio(victorySound).play();
    } else if (props.myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      props.setScore(props.score - 1);
      new Audio(defeatSound).play();
    } else {
      setPlayerWin("draw");
      new Audio(drawSound).play();
    }
  };

  useEffect(() => {
    let timer: number | undefined = undefined;

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      Result();
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${props.myChoice} ${
            playerWin == "win" ? `icon icon--${props.myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin == "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter == 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin == "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

/*
 my choice:{myChoice} <br />
      House choice:{house} <br />
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setHouse()}>
        Play Again
      </Link>

*/
