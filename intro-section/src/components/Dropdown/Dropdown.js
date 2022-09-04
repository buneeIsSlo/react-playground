import React from 'react'

function Dropdown({ title, items }) {

    return (
        <div className="dropdown">
            <button className="dropdown__button">
                <span className="dropdown__button-title">{title}</span>
                <img src="" alt="" className="dropdown__button-icon" />
            </button>
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index}>{item.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Dropdown;