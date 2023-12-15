import { logo, hamburger } from "../../assets/images";
import { useState } from "react";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const handleNavToggle = () => {
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <header className="pt-4">
      <div className="container relative mx-auto flex items-center justify-between py-2 md:gap-10">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="shortly" />
          </a>
        </div>
        <nav className="md:flex-1">
          <button
            onClick={handleNavToggle}
            className="grid place-content-center p-[2px] md:hidden"
          >
            <img src={hamburger} alt="" aria-hidden="true" />
          </button>
          <div
            className={`${
              isMenuHidden ? "hidden" : "animate-popup block"
            } absolute right-5 top-14 mx-auto w-[90%] max-w-[425px] rounded-lg bg-primary-violet px-5 py-10 shadow-xl md:static md:mx-0 md:flex md:w-full md:max-w-none md:justify-between md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
          >
            <ul className="flex flex-col gap-8 font-bold text-white md:flex-row md:font-regular md:text-neutral-n1">
              <li className="grid place-content-center">
                <a
                  className="md:hover:font-bold md:hover:text-neutral-n3"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="grid place-content-center">
                <a
                  className="md:hover:font-bold md:hover:text-neutral-n3"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="grid place-content-center">
                <a
                  className="md:hover:font-bold md:hover:text-neutral-n3"
                  href="#"
                >
                  Resources
                </a>
              </li>
            </ul>
            <hr className="my-10 border-t-gray-500" />
            <ul className="flex flex-col gap-6 font-bold text-white md:flex-row md:font-regular md:text-neutral-n1">
              <li className="grid place-content-center">
                <a
                  className="md:hover:font-bold md:hover:text-neutral-n3"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="md:grid md:place-content-center">
                <a
                  className="btn-primary block w-full rounded-full py-3 text-center md:w-32 md:font-bold"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
