import './App.css';
import "./sass/app.scss";
import images from "./constants/images";
import { HamburgerMenu, CTA } from './components';

function App() {
  return (
    <>
      <header className="header flex">
        <img src={images.logo} alt="" className="header__logo" />
        <HamburgerMenu />
      </header>
      <article className="content">
        <img src={images.heroMobile} alt="" className="content__img" />
        <CTA />
      </article>
    </>
  );
}

export default App;
