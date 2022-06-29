import "./sass/main.scss";
import images from "./constants/images";

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
    <main>
      <div className="card">
        <span className="card__id">advice #154</span>
        <div className="card__advice-wrapper">
          <blockquote className="card__advice">{`"${advice}"`}</blockquote>
        </div>
        <picture className="card__divider">
          <source media="(max-width: 599px)" srcSet={images.divMobile} />
          <source media="(max-width: 600px)" srcSet={images.divDesktop} />
          <img src={images.divDesktop} alt=""></img>
        </picture>
        <button className="card__button">
          <img src={images.dice} alt="" />
        </button>
      </div>
    </main>
  );
}

export default App;
