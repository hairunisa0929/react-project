function Card({ name, image, city, handleClickPlace }) {
  const onClickButton = (placeName) => {
    alert(`${placeName} is clicked`);
  };

  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <img
        alt={name}
        src={image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="flex mt-2 justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{city}</span>
          <span className="font-medium">{name}</span>
        </div>
        <button
          className="p-2 rounded-lg font-bold text-white bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black"
          //   onClick={() => onClickButton(name)}
          onClick={() => handleClickPlace(name)}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default Card;
