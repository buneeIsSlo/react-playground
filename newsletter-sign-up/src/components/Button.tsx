export default function Button({ textProp: text }: { textProp: string }) {
  return (
    <button className=" w-full h-[35px] bg-secondary-400 rounded-sm text-center text-neutral-100 bg-gradient-to-r hover:from-pink-500 hover:to-orange-500">
      {text}
    </button>
  );
}
