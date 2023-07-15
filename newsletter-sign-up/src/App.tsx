import "./App.css";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import SingUp from "./components/SingUp";
import Thanks from "./components/Thanks";

interface IAppContextValue {
  submitted: boolean;
  setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<IAppContextValue | undefined>({
  submitted: false,
  setFormSubmitted: () => {
    return;
  },
});

export function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ submitted: formSubmitted, setFormSubmitted }}>
      <div className="w-full h-auto laptop:bg-secondary-300 laptop:h-screen laptop:grid laptop:place-content-center">
        {!formSubmitted ? <SingUp /> : <Thanks />}
      </div>
    </AppContext.Provider>
  );
}
