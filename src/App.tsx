import { useState } from "react";
import "./App.css";
import Start from "./components/start";
import Game from "./components/Game";

function App() {
  const [inGame, setInGame] = useState(false);

  console.log(inGame);

  return (
    <>
      <div className="container">
        <div className="main-container">
          {inGame ? <Game></Game> : <Start setInGame={setInGame}></Start>}
          <div className="btn-container">
            <button
              className="reset-btn"
              onClick={() => {
                setInGame(false);
              }}
            >
              다시하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
