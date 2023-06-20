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
    id: "phoneNumber",
    name: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
  },
];

export default function PersonalDetails() {
  return (
    <div className="step-1 bg-white px-6">
      <h2 className="text-3xl font-bold">Personal info</h2>
      <p className="text-md">
        Please provide your name, email address, and phone number.
      </p>
      <Form.Root>
        <Form.Field name="text">
          <Form.Label className="text-sm font-medium block">Name</Form.Label>
          <Form.Control asChild>
            <input
              type="text"
              className="border-neutral-300 w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary"
              placeholder="text"
              required
            ></input>
          </Form.Control>
        </Form.Field>
        <Form.Field name="email">
          <Form.Label className="text-sm font-medium block">Email</Form.Label>
          <Form.Control asChild>
            <input
              type="email"
              className="border-neutral-300 w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary"
              placeholder="text"
              required
            ></input>
          </Form.Control>
        </Form.Field>
        <Form.Field name="phone">
          <Form.Label className="text-sm font-medium block">
            Phone Number
          </Form.Label>
          <Form.Control asChild>
            <input
              type="tel"
              className="border-neutral-300 w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary"
              placeholder="text"
              required
            ></input>
          </Form.Control>
        </Form.Field>
      </Form.Root>
      <Form.Root>
        {fields.map((field) => (
          <InputField
            key={field.id}
            {...field}
            value={"test"}
            errorMessage={"Invalid"}
          />
        ))}
      </Form.Root>
    </div>
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
          <Form.Message className="float-right font-bold text-secondary">
            Invalid input
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="border-neutral-300 w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary"
            placeholder="text"
            required
          ></input>
        </Form.Control>
      </Form.Field>
    </div>
  );
}
