import { useState, createContext, Dispatch, SetStateAction } from "react";
import SingUp from "./components/SingUp";
import Thanks from "./components/Thanks";

interface IFormContextValue {
  formSubmitted: boolean;
  setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}

interface IEmailContextValue {
  emailSubmitted: string;
  setEmailSubmitted: Dispatch<SetStateAction<string>>;
}

export const FormContext = createContext<IFormContextValue>({
  formSubmitted: false,
  setFormSubmitted: () => {
    return;
  },
});

export const EmailContext = createContext<IEmailContextValue>({
  emailSubmitted: "",
  setEmailSubmitted: () => {
    return;
  },
});

export function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [emailSubmitted, setEmailSubmitted] = useState<string>("");

  return (
    <FormContext.Provider value={{ formSubmitted, setFormSubmitted }}>
      <EmailContext.Provider value={{ emailSubmitted, setEmailSubmitted }}>
        <div className="w-full h-auto laptop:bg-secondary-300 laptop:h-screen laptop:grid laptop:place-content-center">
          {!formSubmitted ? <SingUp /> : <Thanks />}
        </div>
      </EmailContext.Provider>
    </FormContext.Provider>
  );
}
