import "./style.scss";
import images from "../../constants/images";

const HamburgerButton = () => {
    return (
        <button className="hamburger">
            <img src={images.menuIcon} alt="" />
        </button>
    )
}

function HamburgerMenu() {
    return (
        < HamburgerButton />
    )
}


export default HamburgerMenu;