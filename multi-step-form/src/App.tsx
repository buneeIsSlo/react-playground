import "./App.css";
import * as Form from "@radix-ui/react-form";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Multi step form</h1>
      <div className="step-1 bg-slate-400 px-6">
        <h2 className="text-3xl font-bold">Personal info</h2>
        <p className="text-md">
          Please provide your name, email address, and phone number.
        </p>
        <Form.Root>
          <Form.Field name="text">
            <Form.Label className="text-sm font-medium block">Name</Form.Label>
            <Form.Control className="w-full rounded h-10" placeholder="test" />
          </Form.Field>
          <Form.Field name="email">
            <Form.Label className="text-sm font-medium block">Email</Form.Label>
            <Form.Control className="w-full rounded h-10" placeholder="test" />
          </Form.Field>
          <Form.Field name="phone">
            <Form.Label className="text-sm font-medium block">
              Phone Number
            </Form.Label>
            <Form.Control className="w-full rounded h-10" placeholder="test" />
          </Form.Field>

          <Form.Submit>Next Step</Form.Submit>
        </Form.Root>
      </div>
    </>
  );
}

export default App;
