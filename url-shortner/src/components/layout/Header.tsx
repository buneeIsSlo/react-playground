import { logo } from "../../assets/images";
import { useState } from "react";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleNavToggle = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <header>
      <div className="container relative mx-auto flex justify-between md:gap-10">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="shortly" />
          </a>
        </div>
        <nav className="relative md:flex-1">
          <button onClick={handleNavToggle} className="md:hidden">
            Menu
          </button>
          <div
            className={`${
              isMenuHidden ? "hidden" : "block"
            } absolute right-0 top-10 w-full outline outline-red-500 md:static md:flex md:justify-between`}
          >
            <ul className="md:flex">
              <li className="">
                <a href="">Features</a>
              </li>
              <li className="">
                <a href="">Pricing</a>
              </li>
              <li className="">
                <a href="">Resources</a>
              </li>
            </ul>
            <ul className="md:flex">
              <li className="">
                <a href="">Login</a>
              </li>
              <li className="">
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
