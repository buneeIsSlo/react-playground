const Content = () => {
    const text = "Wow I love react.";
    const link = "https://reactjs.org/";

    let num = 0;
    const rng = () => {
        num += ~~(Math.random() * 10);
        console.log(num);
    }


    return (
        <div className="content">
            <h1 className="title">Hello React</h1>
            <p className="text">{text}</p>
            <button className="button" onClick={rng}>Generate Random Number</button>
            <p className="random">{num}</p>
            <a href={link} className="link" target="blank">Take me to React</a>
        </div>
    )
}

export default Content;