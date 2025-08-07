export default function CuadroCard({ imgUrl, changeImg, heroImage }) {
  const handleClick = () => {
    if (heroImage !== imgUrl.heroImage) {
      changeImg(imgUrl.heroImg);
    }
  };
  return (
    <div onClick={handleClick} className="">
      <div className="">
        <img
          src={imgUrl.cuadro}
          alt=""
          className={`border-4 ${
            heroImage === imgUrl.heroImg
              ? "border-gray-900"
              : "border-transparent"
          } cursor-pointer`}
        />
      </div>
    </div>
  );
}
