import { React, useState } from 'react';
import "./style.scss";
import images from '../../constants/images';

function Dropdown({ title, items }) {
    let [menu, setMenu] = useState(false);

    return (
        <li className="dropdown nav__item link">
            <button
                className="dropdown__button flex center"
                onClick={() => { setMenu(!menu) }}
            >
                <span className="dropdown__button-title">{title}</span>
                <img className="dropdown__button-icon" src={images.caret} alt="" role="presentation" />
            </button>
            <ul className={`dropdown__menu ${menu ? "hidden" : ""}`}>
                {
                    items.map((item, index) => {
                        return (
                            <li className="dropdown__menu-item link" key={index}>
                                <a href={item.path} className="dropdown__menu-link flex link">
                                    {
                                        item.icon &&
                                        <img className="dropdown__menu-linkIcon" src={item.icon} alt="" aria-hidden="true" />
                                    }
                                    <span className="dropdown__menu-linkName">{item.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

export default Dropdown;