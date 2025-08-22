export default function CardCat({ imgUrl, categoria }) {
  return (
    <div className="relative group">
      <img src={imgUrl} alt={categoria} className="w-full h-full" />
      <div
        class="absolute inset-0 flex justify-center items-center bg-amber-200 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-80 active:opacity-80 focus:opacity-80 cursor-pointer"
        tabIndex="0"
      >
        <p className="uppercase font-bold">{categoria}</p>
      </div>
    </div>
  );
}
