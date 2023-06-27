import { TPeriod, IAddOn } from "./types";

export function getPrice(price: number, period: TPeriod) {
    const newPrice = price * (period === "Yearly" ? 10 : 1);
    const suffix = period === "Yearly" ? "yr" : "mo";
    return `$${newPrice}/${suffix}`;
}

export function findAddOnItem(addOnName: string, addOns: IAddOn[]) {
    return addOns.find((addOn) => addOn.heading === addOnName);
}