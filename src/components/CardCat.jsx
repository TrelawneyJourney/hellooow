export default function CardCat({ imgUrl, categoria }) {
  return (
    <div className="relative group">
      <img src={imgUrl} alt={categoria} className="w-full h-full" />
      <div class="card-overlay absolute inset-0 flex justify-center items-center bg-amber-200 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-80">
        <p class="card-text uppercase font-bold">{categoria}</p>
      </div>
    </div>
  );
}
