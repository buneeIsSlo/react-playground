import { useContext } from "react";
import { AppContext } from "../App";
import { steps } from "./forms/forms";

function FormNavigation() {
  const { appState, appDispatch } = useContext(AppContext);
  const bgStyle = appState.step < steps - 1 ? "bg-primary-dark" : "bg-primary";

  if (appState.isCompleted) return null;

  function handleNextClick(e: React.MouseEvent) {
    e.preventDefault();

    if (appState.step == 0) {
      const { name, email, tel } = appState;
      const errors = getErrors(name.value, email.value, tel.value);

      if (errors.length) {
        errors.forEach((error) =>
          appDispatch({ type: "setError", value: error })
        );
        return;
      }
    }

    appDispatch({ type: "next" });
  }

  function handleBackClick(e: React.MouseEvent) {
    e.preventDefault();
    appDispatch({ type: "back" });
  }

  return (
    <div className="fixed bottom-0 flex w-full bg-white p-4 lg:static lg:px-20">
      {appState.step > 0 && (
        <button
          className="font-medium text-neutral-400 hover:text-primary-dark"
          onClick={handleBackClick}
        >
          Go Back
        </button>
      )}
      <button
        className={`${bgStyle} ml-auto rounded px-4 py-2 text-white hover:opacity-80 lg:rounded-md lg:px-6 lg:py-3`}
        onClick={handleNextClick}
      >
        {appState.step < steps - 1 ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
}

function getErrors(name: string, email: string, tel: string) {
  const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const telReg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const errors: Array<string> = [];
  if (!nameReg.test(name)) {
    errors.push("name");
  }
  if (!emailReg.test(email)) {
    errors.push("email");
  }
  if (!telReg.test(tel)) {
    errors.push("tel");
  }
  return errors;
}

export default FormNavigation;

// TODO Handle next form and back button
