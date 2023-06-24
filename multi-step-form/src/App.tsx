import "./App.css";
import React from "react";
import { useImmerReducer } from "use-immer";
import * as Form from "@radix-ui/react-form";
import FormContainer from "./components/FormContainer";
import { IFormState } from "./types";
import FormNavigation from "./components/forms/FormNavigation";

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

export const AppContext = React.createContext<{
  appState: IFormState;
  appDispatch: React.Dispatch<{ type: string; value?: any }>;
}>({
  appState: initialState,
  appDispatch: () => {
    return {};
  },
});

export function App() {
  const [formState, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState: formState, appDispatch: dispatch }}>
      <Form.Root className="flex flex-col justify-between lg:w-full">
        <FormContainer />
        <Form.Submit asChild>
          <FormNavigation />
        </Form.Submit>
      </Form.Root>
    </AppContext.Provider>
  );
}

function reducer(
  draft: IFormState,
  action: { type: string; value?: any }
): void {
  switch (action.type) {
    case "setUserDetails": {
      const [input, value] = action.value;
      draft[input] = { value, error: "" };
      return;
    }
    case "setError": {
      const input = action.value;
      const errorMessage =
        draft[input].value === "" ? "This field is required" : "Invalid input";
      draft[input].error = errorMessage;
    }
  }
}

export default App;

// TODO Add props to radix primitives
