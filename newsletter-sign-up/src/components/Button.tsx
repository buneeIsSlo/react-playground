export default function Button({ textProp: text }: { textProp: string }) {
  return (
    <button className="bg-secondary-400 text-white text-sm font-bold px-2 py-4 w-full rounded-md transition-all ease-out hover:bg-gradient-to-r from-rose-500 to-[#ff6257] hover:shadow-lg hover:shadow-rose-500/50">
      {text}
    </button>
  );
}
