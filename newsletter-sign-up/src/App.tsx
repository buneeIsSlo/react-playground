import "./App.css";
import SingUp from "./components/SingUp";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="w-full h-full bg-secondary-300 laptop:grid laptop:place-content-center">
      <SingUp />
      {/* <Thanks /> */}
    </div>
  );
}

export default App;
