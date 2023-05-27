import { useState } from "react";

export default function Nav() {
  const [navHidden, setNavHidden] = useState(true);

  return (
    <header className="app__header px-9 h-20 w-full lg:h-32 absolute top-0 left-0 flex justify-between items-center lg:px-[8%]  z-10">
      <a href="#" className="app__logo">
        <img className="scale-[0.8]" src="/public/images/logo.svg" alt="" />
      </a>
      <div className="">
        <button
          className="p-2 lg:hidden"
          onClick={() => setNavHidden(!navHidden)}
        >
          {navHidden && (
            <img src="/public/images/icon-hamburger.svg" alt="hamburger" />
          )}
          {!navHidden && (
            <img src="/public/images/icon-close.svg" alt="close" />
          )}
        </button>
        <nav
          className={`${
            navHidden ? "hidden " : ""
          } bg-white w-[80%] mx-9 rounded absolute top-24 left-0 shadow-2xl lg:w-full lg:relative lg:top-0 lg:block lg:bg-transparent lg:shadow-none`}
        >
          <ul className="flex flex-col top-0 left-0 lg:flex-row lg:gap-10">
            <li className="w-[60%] mx-auto mt-4 lg:mt-0">
              <a
                href="#"
                className="uppercase block text-lg font-barlow-condensed font-bold text-brand-maritime-blue text-center hover:underline"
              >
                product
              </a>
            </li>
            <li className="w-[60%] mx-auto mt-4 lg:mt-0">
              <a
                href="#"
                className="uppercase block text-lg font-barlow-condensed font-bold text-brand-maritime-blue text-center hover:underline"
              >
                features
              </a>
            </li>
            <li className="w-[60%] mx-auto mt-4 lg:mt-0">
              <a
                href="#"
                className="uppercase block text-lg font-barlow-condensed font-bold text-brand-maritime-blue text-center hover:underline"
              >
                pricing
              </a>
            </li>
            <li
              className="w-[80%] mx-auto mt-4 lg:grid lg:place-content-center lg:mt-0 lg:w-auto"
              aria-hidden="true"
            >
              <span
                className="block w-full h-[1px] bg-brand-light-grey lg:bg-brand-grey lg:w-[6px] lg:h-[6px] lg:rounded-full"
                aria-hidden="true"
              ></span>
            </li>
            <li className="w-[60%] mx-auto my-4 lg:my-0">
              <a
                href="#"
                className="uppercase block text-lg font-barlow-condensed font-bold text-brand-mysterious-night text-center hover:underline"
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
