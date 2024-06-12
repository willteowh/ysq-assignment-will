const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-lg p-4 hover:bg-gray-800 cursor-pointer">
      <img
        src={`${process.env.REACT_APP_ASSET_URL}/${product.image_location}`}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <p className="text-center">{product.name}</p>
    </div>
  );
};

export default ProductCard;
