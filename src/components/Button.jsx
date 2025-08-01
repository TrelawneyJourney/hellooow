export default function Button({ children }) {
  return (
    <button className="bg-neutral-800 text-white px-6 py-3 w-[280px] hover:bg-neutral-950 transition-colors">
      {children}
    </button>
  );
}
