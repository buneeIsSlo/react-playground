import ListIcon from "../assets/images/icon-list.svg";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Illustration from "./Illustration";

const list: string[] = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function SingUp() {
  return (
    <div className="h-screen max-w-[380px] mx-auto">
      <Illustration />
      <div className="px-5 mt-9">
        <h1 className="font-bold text-4xl pb-6">Stay updated!</h1>
        <p className="color pb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          {list.map((item: string, i: number) => {
            return (
              <li key={i} className="w-full flex gap-3 pb-4">
                <img src={ListIcon} alt="" aria-hidden="true" />
                <p className="leading-normal">{item}</p>
              </li>
            );
          })}
        </ul>
        <Form.Root className="pt-6 pb-8 flex flex-col gap-6">
          <Form.Field name="email">
            <div className="flex justify-between align-middle">
              <Form.Label className="text-xs font-bold py-1">
                Email address
              </Form.Label>
              <Form.Message
                className="text-primary-tomato text-xs font-bold py-1"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="text-primary-tomato text-xs font-bold py-1"
                match="typeMismatch"
              >
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full inline-flex px-6 py-4 appearance-none border outline-none items-center justify-center rounded-md text-[15px] leading-none hover:shadow-[0_0_0_1px_#242742] focus:shadow-[0_0_0_1px_#242742]"
                type="email"
                placeholder="email@company.com"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit className="w-full" asChild>
            <Button textProp={"Subscribe to monthly newsletter"} />
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
}

export default SingUp;
