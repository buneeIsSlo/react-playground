import "./style.scss";
import images from "../../constants/images";

const HamburgerMenu = () => {
    return (
        <button className="test">
            <img src={images.menuIcon} alt="" />
        </button>
    )
}

export default HamburgerMenu;