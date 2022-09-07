import "./style.scss";
import images from "../../constants/images";
import { dropdownData } from "../../constants/data";
import Dropdown from "../Dropdown/Dropdown.js";

const HamburgerButton = () => {
    return (
        <button className="hamburger">
            <img src={images.menuIcon} alt="" />
        </button>
    )
}

function HamburgerMenu() {

    return (
        <>
            < HamburgerButton />
            <nav className="nav">
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
            </nav>
        </>
    )
}


export default HamburgerMenu;