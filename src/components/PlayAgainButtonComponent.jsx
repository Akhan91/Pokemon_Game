import React from 'react';
import './PlayAgainButton.css';

const playAgain = () => {
  //Refreshes the page in order to throw a new round
  window.location.reload(false);
};

function PlayAgainButton() {
  return (
    <div className="playAgainButtonDiv">
      <button className="playAgainButton" onClick={playAgain}>
        Play Again!
      </button>
    </div>
  );
}

export default PlayAgainButton;
