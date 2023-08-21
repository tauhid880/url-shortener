import { useState } from "react";
import "./App.css";
import BackgroundAnimate from "./BackgroundAnimate";
import LinkResult from "./LinkResult";
import InputShortener from "./inputShortener";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
