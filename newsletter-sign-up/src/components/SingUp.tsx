import ListIcon from "../assets/images/icon-list.svg";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";

const list: string[] = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function SingUp() {
  return (
    <div className="h-screen grid grid-rows-[30fr,70fr]">
      <div className="w-full h-auto bg-illus-sm bg-no-repeat bg-top"></div>
      <div className="px-5">
        <h1 className="font-bold text-4xl pb-6">Stay updated!</h1>
        <p className="color pb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul>
          {list.map((item: string, i: number) => {
            return (
              <li key={i} className="w-full flex align-top gap-3 pb-4">
                <img src={ListIcon} alt="" aria-hidden="true" />
                <p className="leading-relaxed">{item}</p>
              </li>
            );
          })}
        </ul>
        <Form.Root>
          <Form.Field name="email">
            <div>
              <Form.Label>Email address</Form.Label>
              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch">
                Please provide a valid email
              </Form.Message>
              <Form.Control asChild>
                <input
                  className="box-border w-full inline-flex h-[45px] appearance-none border border-neutral-200 outline-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none hover:shadow-[0_0_0_1px_#242742] focus:shadow-[0_0_0_1px_#242742]"
                  type="email"
                  required
                />
              </Form.Control>
            </div>
            <Form.Submit className="w-full" asChild>
              <Button textProp={"test"} />
            </Form.Submit>
          </Form.Field>
        </Form.Root>
      </div>
    </div>
  );
}

export default SingUp;
