import { useContext, useState } from "react";
import ListIcon from "../assets/images/icon-list.svg";
import * as Form from "@radix-ui/react-form";
import Button from "./Button";
import Illustration from "./Illustration";
import { EmailContext, FormContext } from "../App";

const list: string[] = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

export default function SingUp() {
  const { setFormSubmitted } = useContext(FormContext);
  const { setEmailSubmitted } = useContext(EmailContext);
  const [email, setEmail] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setEmailSubmitted(email);
  };

  return (
    <div className="bg-secondary-100 h-auto max-w-[380px] mx-auto laptop:h-auto laptop:w-[90%] laptop:max-w-none laptop:px-6 laptop:py-6 laptop:flex laptop:flex-row-reverse laptop:gap-8 laptop:rounded-3xl laptop:shadow-xl motion-safe:animate-popup">
      <Illustration />
      <div className="laptop:flex laptop:flex-col laptop:justify-end">
        <div className="px-5 mt-9 laptop:px-9 laptop:mt-0">
          <h1 className="font-bold text-4xl pb-6 laptop:text-5xl">
            Stay updated!
          </h1>
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
          <Form.Root
            className="pt-6 pb-8 flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
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
                  className="FormMessage text-primary-tomato text-xs font-bold py-1"
                  match="patternMismatch"
                >
                  Please provide a valid email
                </Form.Message>
              </div>
              <Form.Control className="FormControl" asChild>
                <input
                  className={`box-border w-full inline-flex px-6 py-4 appearance-none border outline-none rounded-md text-[15px] leading-none hover:shadow-[0_0_0_1px_#242742] focus:shadow-[0_0_0_1px_#242742] data-[invalid=true]:border-primary-tomato data-[invalid=true]:text-primary-tomato data-[invalid=true]:bg-rose-100 data-[invalid=true]:hover:shadow-none data-[invalid=true]:focus:shadow-none`}
                  type="email"
                  value={email}
                  placeholder="email@company.com"
                  onChange={handleInputChange}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit className="w-full" asChild>
              <Button onClickAction={() => handleSubmit}>
                Subscribe to monthly newsletter
              </Button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </div>
  );
}
