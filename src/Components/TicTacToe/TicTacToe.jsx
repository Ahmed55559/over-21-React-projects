import { useEffect, useState } from "react";
import "./TicTacToe.css";
function TicTacToe() {
  const [isXTrun, setIsXTrun] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");
  function handleClick(index) {
    const cpySquares = [...squares];
    if (squares[index]) return;
    cpySquares[index] = isXTrun ? "x" : "o";
    setIsXTrun(!isXTrun);
    setSquares(cpySquares);
    console.log(squares);
  }
  function getWinner(squares) {
    const winningPatterns = [
      // 0 1 2
      // 3 4 5
      // 6 7 8
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      return setStatus("this is a draw!");
    } else if (getWinner(squares)) {
      return setStatus(`${getWinner(squares)} is win!`);
    } else {
      return setStatus(`next player is ${isXTrun ? "X" : "O"}`);
    }
  }, [squares, isXTrun]);
  function handleRestart() {
    setIsXTrun(true);
    setSquares(Array(9).fill(""));
    setStatus("");
  }
  return (
    <div className="TicTacToe-container">
      <div className="row">
        <Square handleClick={() => handleClick(0)} value={squares[0]} />
        <Square handleClick={() => handleClick(1)} value={squares[1]} />
        <Square handleClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="row">
        <Square handleClick={() => handleClick(3)} value={squares[3]} />
        <Square handleClick={() => handleClick(4)} value={squares[4]} />
        <Square handleClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="row">
        <Square handleClick={() => handleClick(6)} value={squares[6]} />
        <Square handleClick={() => handleClick(7)} value={squares[7]} />
        <Square handleClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <div className="result">
        <h3>{status}</h3>
        {!status.includes("next player") ? (
          <button onClick={() => handleRestart()}>Restart</button>
        ) : null}
      </div>
    </div>
  );
}

function Square({ value, handleClick }) {
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default TicTacToe;
