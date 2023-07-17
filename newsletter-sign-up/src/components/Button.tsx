import { ReactNode } from "react";

interface IButtonProps {
  onClickAction?: () => void;
  children: ReactNode;
}

export default function Button({ onClickAction, children }: IButtonProps) {
  return (
    <button
      className="bg-secondary-400 text-white text-sm font-bold px-2 py-4 w-full rounded-md transition-all ease-out hover:bg-gradient-to-r from-rose-500 to-[#ff6257] hover:shadow-lg hover:shadow-rose-500/50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-dotted focus-visible:outline-rose-500"
      onClick={onClickAction ? onClickAction : undefined}
    >
      {children}
    </button>
  );
}
