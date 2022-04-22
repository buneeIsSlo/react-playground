import images from "../constants/images";

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__content">
                <div className="card__rating"></div>
                <div className="card__icon-wrapper">
                    <img src={images.icon} alt="" className="card__icon" />
                </div>
                <div className="card__message">
                    <h2 className="card__title"></h2>
                    <p className="card__description"></p>
                    <div className="card__rating-wrapper"></div>
                </div>
                <button type="button" className="card__cta">submit</button>
            </div>
        </div>
    )
}

export default Card;