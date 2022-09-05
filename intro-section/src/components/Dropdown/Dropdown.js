import React from 'react';
import images from '../../constants/images';

function Dropdown({ title, items }) {

    return (
        <div className="dropdown">
            <button className="dropdown__button flex center">
                <span className="dropdown__button-title">{title}</span>
                <img className="dropdown__button-icon" src={images.caret} alt="" role="presentation" />
            </button>
            <ul className="dropdown__menu">
                {
                    items.map((item, index) => {
                        return (
                            <li className="dropdown__menu-item" key={index}>
                                <a href={item.path} className="dropdown__menu-link flex center">
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
        </div>
    )
}

export default Dropdown;