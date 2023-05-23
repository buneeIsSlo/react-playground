import React from "react";

function Nav() {
  return (
    <header className="app__header w-full h-32 absolute top-0 left-0 flex justify-between items-center lg:px-[8%]  z-10">
      <a href="#" className="app__logo">
        <img src="/public/images/logo.svg" alt="" />
      </a>
      <div className="app__nav">
        <button className="bg-red-500 hidden">
          <img src="/public/images/icon-hamburger.svg" alt="" />
        </button>
        <nav>
          <ul className="flex lg:gap-10">
            <li>
              <a
                href="#"
                className="uppercase font-barlow-condensed font-bold text-brand-maritime-blue hover:underline"
              >
                product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase font-barlow-condensed font-bold text-brand-maritime-blue hover:underline"
              >
                features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="uppercase font-barlow-condensed font-bold text-brand-maritime-blue hover:underline"
              >
                pricing
              </a>
            </li>
            <li className="grid place-content-center">
              <span
                className="block w-[6px] h-[6px] bg-brand-grey align-middle rounded-full align-center"
                aria-hidden="true"
              ></span>
            </li>
            <li>
              <a
                href="#"
                className="uppercase font-barlow-condensed font-bold text-brand-mysterious-night hover:underline"
              >
                login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
