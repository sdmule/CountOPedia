import { useState } from "react";
import attackImage from "./images/attack.png";
import defenceImage from "./images/defend.png";

function Counter() {
  let [count, setCount] = useState(0);
  let [gameStatus, setGameStatus] = useState("");

  function handleIncrement() {
    const newValue = count + 1;
    setCount(newValue);

    if (newValue >= 5) {
      setGameStatus("You Won!");
    } else {
      setGameStatus("");
    }
  }
  function handleDecrement() {
    // setCount(function (prev) {   // OR  //setCount((prev) => prev - 1);
    //   return prev - 1;
    // });

    const newValue = count - 1;
    setCount(newValue);

    if (newValue <= -5) {
      setGameStatus("You Lost!");
    } else {
      setGameStatus("");
    }
  }

  function handleRandomPlay() {
    const playMode = Math.round(Math.random);
    if (playMode == 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  }

  function handleReset() {
    setCount(0);
  }

  function handleLog() {
    console.log(count);
  }

  return (
    <div className="container">
      <div className="row text-white container">
        <h1>Game Score:{count}</h1>
        <p>You win at +5 points and lose at -5 points</p>
        {/* <p>Last Play: </p> */}
        <h3>Game Status : {gameStatus}</h3>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attackImage}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={handleIncrement}
          ></img>
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={defenceImage}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={handleDecrement}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-success m-2 w-100"
            onClick={handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button className="btn btn-danger m-2 w-100" onClick={handleReset}>
            Reset Game Score
          </button>
          <br />
          <button className="btn btn-warning m-2 w-100" onClick={handleLog}>
            Log
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
