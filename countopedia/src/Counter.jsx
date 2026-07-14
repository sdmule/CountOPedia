import { useState } from "react";
import attackImage from "./images/attack.png";
import defenceImage from "./images/defend.png";

function Counter() {
  let [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(function (prev) {
      return prev + 1;
    });
  }
  function handleDecrement() {
    setCount(function (prev) {
      return prev - 1;
    });
    // OR
    //setCount((prev) => prev - 1);
  }

  return (
    <div className="container">
      <div className="row text-white container">
        <h1>Game Score:{count}</h1>
        <p>You win at +5 points and lose at -5 points</p>
        {/* <p>Last Play: </p> */}
        <h3>Game Status : </h3>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attackImage}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
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
          ></img>
        </div>
        <button onClick={handleIncrement} className="btn btn-success m-2">
          +1
        </button>
        <button onClick={handleDecrement} className="btn btn-danger m-2">
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;
