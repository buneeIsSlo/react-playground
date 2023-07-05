import "./App.css";
import SingUp from "./components/SingUp";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="w-full h-auto laptop:bg-secondary-300 laptop:h-screen laptop:grid laptop:place-content-center">
      <SingUp />
      {/* <Thanks /> */}
    </div>
  );
}

export default App;
