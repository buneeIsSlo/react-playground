import "./sass/main.scss";
import images from "./constants/images";

import { useState, useEffect } from "react";

const API_URL = "https://api.adviceslip.com/advice";

function App() {

  let [advice, setAdvice] = useState("loading...");

  async function requestAdvice() {
    const resp = await fetch(API_URL, { cache: "no-cache" });

    if (!resp.ok) {
      throw new Error();
    }
    else {
      const data = await resp.json();
      setAdvice(data["slip"].advice);
    }
  }

  useEffect(() => {
    requestAdvice();
  }, []);

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
        <button className="card__button" onClick={requestAdvice}>
          <img src={images.dice} alt="" />
        </button>
      </div>
    </main>
  );
}

export default App;
