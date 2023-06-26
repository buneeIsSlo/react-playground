import { useContext } from "react";
import { AppContext } from "../App";
import { getPrice } from "../utils";
import { IPlanOption } from "../types";
import Icons from "../assets/index";

function PlanOption(plan: IPlanOption) {
  const { name, price, monthsFree } = plan;
  const { appState, appDispatch } = useContext(AppContext);

  function getBorderStyles() {
    return appState.plan.name === name
      ? "border-primary bg-neutral-200"
      : "border-neutral-300";
  }

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    appDispatch({ type: "setPlan", value: plan });
  }

  return (
    <div
      className={`${getBorderStyles()} flex cursor-pointer gap-3 rounded-lg border px-4 py-3 hover:border-primary lg:flex-col lg:gap-12 lg:p-4`}
      onClick={handleClick}
    >
      <img className="my-0.5 h-fit w-fit" src={Icons[name]} alt={name} />
      <div>
        <h2 className="font-medium text-primary-dark">{name}</h2>
        <p className="text-sm">{getPrice(price, appState.period)}</p>
        {appState.period === "Yearly" && (
          <p className="my-1 text-xs font-medium text-primary-dark">
            {monthsFree} months free
          </p>
        )}
      </div>
    </div>
  );
}

export default PlanOption;
