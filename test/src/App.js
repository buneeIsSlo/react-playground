// import logo from './logo.svg';
import './App.css';

function App() {
  const text = "Wow I love react.";
  const link = "https://reactjs.org/";
  const obj = { a: "does", b: "this", c: "work" };

  return (
    <div className="App">
      <div className="content">
        <h1 className="title">Hello React</h1>
        <p className="text">{text}</p>
        <p className="random">{~~(Math.random() * 10)}</p>
        <a href={link} className="link" target="blank">Take me to React</a>
        {/* <p className="obj">{obj}</p> */}
      </div>
    </div>
  );
}

console.log("Hello World?");
export default App;
