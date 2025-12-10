import GuessGame from "./components/GuessGame";


function App() {
   return (
    <div className="body-bg">
      <div className="card">
        <h2 className="card-title">Guess the Number</h2>
        <input
          type="number"
          placeholder="Enter a number"
          className="card-input"
        />
        <button className="card-button">Submit</button>
      </div>
    </div>
  );
}

export default App;
