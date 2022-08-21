import './App.css';
import "./sass/app.scss";
import images from "./constants/images";
import HamburgerMenu from './components';

function App() {
  return (
    <header className="header flex">
      <img src={images.logo} alt="" className="header__logo" />
      <HamburgerMenu />
    </header>
  );
}

export default App;
