import { useContext } from "react";
import { AppContext } from "../../App";
import { getPrice } from "../../utils";

export default function Confirmation() {
  const { appState, appDispatch } = useContext(AppContext);

  function getTotal() {
    const sum = appState.addOns.reduce((sum, addOn) => addOn.price + sum, 0);
    return sum + appState.plan.price;
  }

  return (
    <div className="mt-5 space-y-5 text-sm lg:mt-10">
      <div className="grid gap-3 rounded-lg bg-neutral-100 p-4 font-medium lg:gap-4 lg:px-6 lg:py-5">
        <div className="flex items-center justify-between font-bold text-primary-dark lg:text-[1.05rem]">
          <h2>
            {appState.plan.name} ({appState.period})
            <span
              className="block cursor-pointer text-sm font-medium text-neutral-400 underline hover:text-primary lg:my-1"
              onClick={() => appDispatch({ type: "backToStep", value: 2 })}
            >
              Change
            </span>
          </h2>
          <p>{getPrice(appState.plan.price, appState.period)}</p>
        </div>
        <hr className="h-px border-none bg-neutral-300 lg:my-1.5" />
        {appState.addOns.map((addOn, index) => (
          <div className="flex justify-between" key={index}>
            <p className="text-neutral-400">{addOn.heading}</p>
            <p className="text-primary-dark">
              +{getPrice(addOn.price, appState.period)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 lg:px-6">
        <p className="font-medium">
          Total (per {appState.period === "Monthly" ? "month" : "year"})
        </p>
        <p className="text-base font-bold text-primary lg:text-xl">
          +{getPrice(getTotal(), appState.period)}
        </p>
      </div>
    </div>
  );
}
