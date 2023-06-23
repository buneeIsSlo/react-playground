import "./App.css";
import React from "react";
import { useImmerReducer } from "use-immer";
import FormContainer from "./components/FormContainer";
import { IFormState } from "./types";

const initialState: IFormState = {
  step: 0,
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  tel: { value: "", error: "" },
  plan: { name: "Arcade", price: 9, monthsFree: 2 },
  period: "Monthly",
  addOns: [],
  isCompleted: false,
};

function reducer(
  draft: IFormState,
  action: { type: string; value?: any }
): void {
  switch (action.type) {
    case "logState": {
      const [input, value] = action.value;

      draft[input] = { value, error: "" };
      console.log([input, value]);
      return;
    }
  }
}

export const AppContext = React.createContext<{
  appState: IFormState;
  appDispatch: React.Dispatch<{ type: string; value?: any }>;
}>({
  appState: initialState,
  appDispatch: () => {
    return {};
  },
});

function App() {
  const [formState, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider
        value={{ appState: formState, appDispatch: dispatch }}
      >
        <FormContainer />
      </AppContext.Provider>
    </>
  );
}

export default App;
