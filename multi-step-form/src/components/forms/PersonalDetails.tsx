import * as Form from "@radix-ui/react-form";

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
  return (
    <Form.Root className="lg:mt-2">
      {fields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={"test"}
          errorMessage={""}
        />
      ))}
    </Form.Root>
  );
}

function InputField(props: IInputFieldProps) {
  const { id, name, placeholder, value, errorMessage } = props;

  console.log(id, name, placeholder, value, errorMessage);

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
            placeholder={placeholder}
            required
          ></input>
        </Form.Control>
      </Form.Field>
    </div>
  );
}
