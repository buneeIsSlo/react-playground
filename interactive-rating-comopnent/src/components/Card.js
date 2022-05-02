import images from "../constants/images";
import "./Card.scss";

const rating = 4;
const maxRating = 5;

const title = "Hello world";
const description = "Description is great";

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__content">
                <div className="card__rating">
                    <div className="card__icon-wrapper">
                        <img src={images.icon} alt="" className="card__icon" />
                    </div>
                    <div className="card__message">
                        <h2 className="card__title">{title}</h2>
                        <p className="card__description">{description}</p>
                        <div className="card__rating-wrapper"></div>
                    </div>
                    <button type="button" className="card__cta">submit</button>
                </div>
                <template className="card__thanks">
                    <div className="card__illustration-wrapper">
                        <img src={images.illustration} alt="" className="card__ilustration" />
                    </div>
                    <div className="card__rating-result-wrapper">
                        <div className="card__rating-result">
                            You selected {rating} out of {maxRating}
                        </div>
                    </div>
                    <div className="card__thanks-message">
                        <h2>Thank you!</h2>
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                    </div>
                </template>
            </div>
        </div>
    )
}

export default Card;