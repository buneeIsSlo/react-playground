import { successIcon } from "../assets";
import Button from "./Button";

function Thanks() {
  return (
    <div className="h-screen w-full px-5 pt-40 pb-8 flex flex-col justify-between max-w-[380px] mx-auto">
      <div>
        <img src={successIcon} alt="Success checkmark" />
        <h2 className="font-bold text-4xl py-6">Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <b>ass@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <div>
        <Button textProp="Dismiss message" />
      </div>
    </div>
  );
}

export default Thanks;
