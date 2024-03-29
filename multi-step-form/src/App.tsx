import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import * as Form from "@radix-ui/react-form";
import FormContainer from "./components/FormContainer";
import { steps } from "./components/forms/forms";
import { IFormState } from "./types";
import FormNavigation from "./components/FormNavigation";
import Sidebar from "./components/Sidebar";
import { findAddOnItem } from "./utils";

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

export const AppContext = createContext<{
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
      <div className="relative h-screen bg-neutral-200 lg:flex lg:h-[600px] lg:w-[925.5px] lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-lg">
        <Sidebar />
        <Form.Root className="flex flex-col justify-between lg:w-full">
          <FormContainer />
          <Form.Submit asChild>
            <FormNavigation />
          </Form.Submit>
        </Form.Root>
      </div>
    </AppContext.Provider>
  );
}

function reducer(
  draft: IFormState,
  action: { type: string; value?: any }
): void {
  switch (action.type) {
    case "next": {
      if (draft.step < steps - 1) draft.step += 1;
      else draft.isCompleted = true;
      return;
    }
    case "back": {
      draft.step -= 1;
      return;
    }
    case "backToStep": {
      const toStep = action.value - 1;
      if (toStep < 0) draft.step = 0;
      else if (toStep >= steps) draft.step = steps - 1;
      else draft.step = toStep;
      return;
    }
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
      return;
    }
    case "setPlan": {
      draft.plan = action.value;
      return;
    }
    case "togglePeriod": {
      draft.period = draft.period === "Monthly" ? "Yearly" : "Monthly";
      return;
    }
    case "setAddOns": {
      const addOn = action.value;

      if (findAddOnItem(addOn.heading, draft.addOns)) {
        const filteredAddOns = draft.addOns.filter(
          (obj) => obj.heading !== addOn.heading
        );
        draft.addOns = filteredAddOns;
        return;
      }
      draft.addOns = [...draft.addOns, addOn];

      return;
    }
  }
}

export default App;

// TODO Add props to radix primitives
