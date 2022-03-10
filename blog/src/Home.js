import { useState } from "react";

const Home = () => {

    let [name, setName] = useState("cell");

    const handleClick = (e) => {
        console.log("hello world", e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
        setName("bunee");
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('bruva', e)}>Click me again</button>
        </div>
    );
}

export default Home;