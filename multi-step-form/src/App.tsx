import "./App.css";
import * as Form from "@radix-ui/react-form";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Multi step form</h1>
      <Form.Root>
        <Form.Field name="text">
          <Form.Label>Name</Form.Label>
          <Form.Control />
        </Form.Field>
        <Form.Field name="email">
          <Form.Label>Email</Form.Label>
          <Form.Control />
        </Form.Field>

        <Form.Submit>Next Step</Form.Submit>
      </Form.Root>
    </>
  );
}

export default App;
