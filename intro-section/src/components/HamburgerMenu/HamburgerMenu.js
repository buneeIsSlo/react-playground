import { useState } from "react";
import "./style.scss";
import images from "../../constants/images";
import { Features } from "../../constants/data";

const HamburgerButton = () => {
    return (
        <button className="hamburger">
            <img src={images.menuIcon} alt="" />
        </button>
    )
}

function HamburgerMenu() {

    const [menu, setMenu] = useState(false);

    return (
        <>
            < HamburgerButton />
            <nav className="nav">
                <div className="menu__link">
                    <button
                        className="flex center"
                        onClick={() => setMenu(!menu)}
                    >
                        <span>Features</span>
                        <img src={images.caret} alt="caret" />
                    </button>
                    <ul className={menu ? "" : "hidden"}>
                        {
                            Features.map((item, index) => {
                                return (
                                    <li key={index} className="flex center">
                                        <img src={item.icon} alt="calendar" />
                                        <a href={item.path} className={`${item.cName} no-underline`}>{item.text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default HamburgerMenu;