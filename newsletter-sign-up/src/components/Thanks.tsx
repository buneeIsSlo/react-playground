import { successIcon } from "../assets";
import Button from "./Button";

function Thanks() {
  return (
    <div className="h-screen w-full px-5 pt-40 pb-8 flex flex-col justify-between max-w-[380px] mx-auto laptop:h-auto laptop:bg-secondary-100 laptop:p-11 laptop:rounded-3xl laptop:max-w-[450px] laptop:gap-11">
      <div>
        <img src={successIcon} alt="Success checkmark" />
        <h2 className="font-bold text-4xl py-6 laptop:text-5xl">
          Thanks for subscribing!
        </h2>
        <p className="text-sm laptop:text-base">
          A confirmation email has been sent to <b>ass@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>
      <div>
        <Button onClickAction={() => console.log("peace")}>
          Dismiss message
        </Button>
      </div>
    </div>
  );
}

export default Thanks;
