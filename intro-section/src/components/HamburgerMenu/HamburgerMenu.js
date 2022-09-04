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
                {
                    dropdownData.map((data) => {
                        return (
                            <Dropdown title={data.title} items={data.items} key={data.title} />
                        );
                    })
                }
            </nav>
        </>
    )
}


export default HamburgerMenu;