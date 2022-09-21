import "./style.scss";
import images from "../../constants/images";

const Clients = () => {
    return (
        <ul className="clients flex center">
            <li><img src={images.databiz} alt="audiophile" /></li>
            <li><img src={images.audiophlie} alt="audiophile" /></li>
            <li><img src={images.meet} alt="audiophile" /></li>
            <li><img src={images.maker} alt="audiophile" /></li>
        </ul>
    )
}

function Intro() {
    return (
        <section className="intro">
            <h1 className="intro__heading">Make remote work</h1>
            <p className="intro__info">
                Get your team in sync, no matter your location. Streamline processes,
                create team rituals, and watch productivity soar.
            </p>
            <a href="/link" className="intro__cta">Learn more</a>
            <Clients />
        </section>
    )
}

export default Intro;