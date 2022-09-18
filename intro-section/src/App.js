import './App.css';
import "./sass/app.scss";
import images from "./constants/images";
import { HamburgerMenu, Intro } from './components';

function App() {
  return (
    <>
      <header className="header flex center">
        <img src={images.logo} alt="" className="header__logo" />
        <HamburgerMenu />
      </header>
      <article className="hero">
        <picture>
          <source media="(max-width: 930px)" srcSet={images.heroMobile} />
          <source media="(max-width: 932px)" srcSet={images.heroDesktop} />
          <img src={images.heroDesktop} alt="" className="hero__img" />
        </picture>
        <Intro />
      </article>
    </>
  );
}

export default App;
