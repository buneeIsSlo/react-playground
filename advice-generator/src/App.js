import { useState, useEffect } from "react";
import './App.css';

function App() {

  let [advice, setAdvice] = useState("Placeholder");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice").then(response => {
      return response.json();
    }).then((slip) => {
      console.log(slip);
    })
  }, [])


  return (
    <div className="App">
      <h1>Advice generator</h1>
      <p className="advice">{advice}</p>
    </div>
  );
}

export default App;
