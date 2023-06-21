import { forms } from "./forms/forms";

function FormContainer() {
  const currentForm = forms[0];
  const margin = "";

  return (
    <div
      className={`${margin} mx-4 grid translate-y-[-72px] rounded-xl bg-white px-6 py-8 text-neutral-400 shadow-lg lg:translate-y-0 lg:px-16 lg:shadow-none`}
    >
      <h1 className="text-2xl font-bold leading-tight text-primary-dark lg:text-[2rem]">
        {currentForm.header}
      </h1>
      <p className="mt-2 pr-2">{currentForm.description}</p>
      {currentForm.form}
    </div>
  );
}

export default FormContainer;
