import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Price is Right!</h1>
      <h2>Guess the correct number for a chance to double your money!</h2>
      <button>Connect AlgoWallet</button>
      <h3>OR</h3>

      <div class="mnemonic">
        <span>Import Account by mnemonic</span>
        <br></br>
        <br></br>

        <textarea
          name="secret"
          class="ContractInfo "
          placeholder="Paste Mnemonic Key"
          data-gramm="false"
          wt-ignore-input="true"
          //data-quillbot-element="0Yn1Rw5qtBy0352nOABcD"
        >
          {" "}
        </textarea>
      </div>
    </div>
  );
}

export default App;
