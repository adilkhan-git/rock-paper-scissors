import React from "react";

interface IProps {
  score: number;
}

const Header = (props: IProps) => {
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score</span>
        <div className="score-box__score">{props.score}</div>
      </div>
    </div>
  );
};

export default Header;
