import "./_reset.scss";

import { useState, useEffect } from "react";

function App() {

  let [advice, setAdvice] = useState("loading...");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(response => {
        return response.json();
      }).then((data) => {
        const newLocal = "slip";
        console.log(data[newLocal].advice);
        setAdvice(data[newLocal].advice);
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
