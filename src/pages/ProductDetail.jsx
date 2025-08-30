import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { productos } from "../constants";
import Carousel from "../components/Carousel";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productos.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <p>Producto no encontrado 😿</p>;
  }

  const prodImg = [
    product.imgUrl,
    ...(Array.isArray(product.imgDetail)
      ? product.imgDetail
      : product.imgDetail
      ? [product.imgDetail]
      : []),
  ];

  return (
    <Container>
      <div className="py-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Carousel
            slides={1}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            items={prodImg}
            renderItem={(imgP) => (
              <img src={imgP} alt={product.nombre} className="w-full" />
            )}
          />

          <div className="flex flex-col gap-8">
            <p
              className="text-amber-400 text-sm uppercase cursor-pointer hover:underline active:underline"
              onClick={() => navigate(`/products/${product.categoria}`)}
            >
              {product.categoria}
            </p>
            <div className=" flex justify-between items-center">
              <h1 className="text-2xl uppercase">{product.nombre}</h1>
              <div className="rounded-full bg-neutral-200 p-3 cursor-pointer">
                <FaHeart className="text-sm text-neutral-500 hover:text-amber-500 active:text-amber-500 transform transition-transform duration-200 hover:scale-130" />
              </div>
            </div>
            <p className="text-neutral-500">{product.descripcion}</p>
            <p className="text-2xl font-bold">
              $ {new Intl.NumberFormat("es-AR").format(product.precio)}
            </p>
            <div className="flex gap-4">
              <button className="btn-gray">Comprar</button>
              <button className="btn-gray">Agregar al carrito</button>
            </div>
            <p
              className="text-xs text-neutral-400 hover:underline active:underline cursor-pointer"
              onClick={() => navigate(`/products/todos`)}
            >
              volver a todos los productos
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
