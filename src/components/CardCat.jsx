import { useNavigate } from "react-router-dom";

export default function CardCat({ imgUrl, categoria }) {
  const navigate = useNavigate();

  return (
    <div className="relative group">
      <img src={imgUrl} alt={categoria} className="w-full h-full" />
      <div
        className="absolute inset-0 flex justify-center items-center bg-amber-200 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-80 active:opacity-80 focus:opacity-80 cursor-pointer"
        tabIndex="0"
        onClick={() => navigate(`/products/${categoria}`)}
      >
        <p className="uppercase font-bold">{categoria}</p>
      </div>
    </div>
  );
}
