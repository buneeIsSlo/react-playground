import "./sass/main.scss";
import images from "./constants/images";

import { useState, useEffect } from "react";

const API_URL = "https://api.adviceslip.com/advice";

function App() {

  let [loading, setLoading] = useState(false);
  let [id, setId] = useState("?");
  let [advice, setAdvice] = useState(null);

  async function requestAdvice() {
    setLoading(true);
    const resp = await fetch(API_URL, { cache: "no-cache" });

    if (!resp.ok) {
      setLoading(false);
      setAdvice("Sorry, can't fetch :( ")
      throw new Error();
    }
    else {
      const data = await resp.json();
      setLoading(false);
      setAdvice(data["slip"].advice);
      setId(data["slip"].id);
    }
  }

  useEffect(() => {
    requestAdvice();
  }, []);

  return (
    <main>
      <h1 style={{ opacity: 0, width: 0 }}>Advice Generator</h1>
      <div className="card">
        <span className="card__id">{`advice #${id}`}</span>
        <div className="card__advice-wrapper">
          {loading ? (<img src={images.loader} alt="Loading" />) :
            (<blockquote className="card__advice">{`"${advice}"`}</blockquote>)}
        </div>
        <picture className="card__divider" aria-hidden="true">
          <source media="(max-width: 599px)" srcSet={images.divMobile} />
          <source media="(max-width: 600px)" srcSet={images.divDesktop} />
          <img src={images.divDesktop} alt=""></img>
        </picture>
        <button className="card__button" onClick={requestAdvice} aria-label="Show Quote">
          <img src={images.dice} alt="" aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}

export default App;
