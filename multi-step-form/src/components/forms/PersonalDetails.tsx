import { useContext } from "react";
import * as Form from "@radix-ui/react-form";
import { AppContext } from "../../App";

interface IInputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  errorMessage: string;
}

const fields = [
  {
    id: "name",
    name: "Name",
    placeholder: "e.g. Stephen King",
  },
  {
    id: "email",
    name: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    id: "tel",
    name: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
  },
];

export default function PersonalDetails() {
  const { appState } = useContext(AppContext);

  return (
    <Form.Root className="lg:mt-2">
      {fields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={appState[field.id].value}
          errorMessage={appState[field.id].error}
        />
      ))}
    </Form.Root>
  );
}

function InputField(props: IInputFieldProps) {
  const { id, name, placeholder, value, errorMessage } = props;
  const { appDispatch } = useContext(AppContext);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const args = [e.target.id, e.target.value];
    appDispatch({ type: "logState", value: args });
  }

  return (
    <div className="mt-3.5 grid gap-1 lg:mt-7">
      <Form.Field name={name}>
        <div className="">
          <Form.Label className="text-xs font-medium text-primary-dark lg:text-sm">
            {name}
          </Form.Label>
          {errorMessage !== "" && (
            <Form.Message className="float-right font-bold text-secondary">
              {errorMessage}
            </Form.Message>
          )}
        </div>
        <Form.Control asChild>
          <input
            type={id}
            id={id}
            className="border-neutral-300 w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            required
          ></input>
        </Form.Control>
      </Form.Field>
    </div>
  );
}
