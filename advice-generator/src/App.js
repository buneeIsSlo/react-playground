import "./sass/main.scss";
import images from "./constants/images";

import { useState, useEffect } from "react";

const API_URL = "https://api.adviceslip.com/advice";

function App() {

  let [loading, setLoading] = useState(false);
  let [id, setId] = useState(154);
  let [advice, setAdvice] = useState("loading...");

  async function requestAdvice() {
    setLoading(true);
    const resp = await fetch(API_URL, { cache: "no-cache" });

    if (!resp.ok) {
      setLoading(false);
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
      <div className="card">
        <span className="card__id">{`advice #${id}`}</span>
        <div className="card__advice-wrapper">
          {loading ? (<img src={images.loader} alt="" />) :
            (<blockquote className="card__advice">{`"${advice}"`}</blockquote>)}
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
