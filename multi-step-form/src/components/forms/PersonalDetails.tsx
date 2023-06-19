import * as Form from "@radix-ui/react-form";

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

        <Form.Submit asChild>
          <button className="ml-auto rounded px-4 py-2 text-white bg-primary-dark hover:opacity-80 lg:rounded-md lg:px-6 l g:py-3">
            Next Step
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
