interface StartProps {
  setInGame: (value: boolean) => void;
}

export default function Start({ setInGame }: StartProps) {
  function handleClick() {
    setInGame(true);
  }

  return (
    <div className="start-container">
      <div className="title-container">
        <span className="start-title-apple">사과</span>
        <span className="start-title-game">게임</span>
      </div>
      <div className="gamestart-container">
        <button className="start-btn" onClick={handleClick}>
          <span className="start-btn-text">Play</span>
        </button>
        <img src="" alt="" />
      </div>
    </div>
  );
}
