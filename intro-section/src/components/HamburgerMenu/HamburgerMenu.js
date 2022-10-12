import "./style.scss";
import { useState } from "react";
import images from "../../constants/images";
import { dropdownData } from "../../constants/data";
import Dropdown from "../Dropdown/Dropdown.js";

function HamburgerMenu() {
    let [navHidden, setNavHidden] = useState(true);

    const overlay = bool => {
        const body = document.querySelector("body");
        if (bool) {
            body.style.overflow = "hidden";
            return <div className="overlay" style={{ "opacity": .4 }} aria-hidden={true}></div>;
        }
        else {
            body.style.overflow = "auto";
            return;
        }
    }

    return (
        <>
            <button
                className="hamburger" onClick={() => setNavHidden(!navHidden)}>
                <img src={navHidden ? images.menuIcon : images.closeIcon} alt="" />
            </button>

            {overlay(!navHidden)}

            <nav className={`nav flex ${navHidden ? " nav--ext" : " nav--enter"}`}>
                <ul className="nav__list">
                    {
                        dropdownData.map((data) => {
                            return (
                                <Dropdown title={data.title} items={data.items} key={data.title} />
                            );
                        })
                    }
                    <li className="nav__list-item">
                        <a href="/careers" className="link">Careers</a>
                    </li>
                    <li className="nav__list-item">
                        <a href="/about" className="link">About</a>
                    </li>
                </ul>
                <ul className="nav__list flex col">
                    <li className="nav__list-item text-center">
                        <a href="/login" className="link">Login</a>
                    </li>
                    <li className="nav__list-item flex text-center">
                        <a href="/register" className="register">Register</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}


export default HamburgerMenu;