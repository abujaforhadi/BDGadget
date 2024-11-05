
import { RiDeleteBinFill } from "react-icons/ri";
import {  WishlistItem } from "../MainLayout/MainLayout";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function WishlistContainer({ p }) {
    const [wishlistProduct, setWishlistProduct] = useContext(WishlistItem);
    const path=useParams()
  console.log(path);

  const { product_id, product_title, description, price, product_image } = p;

  // Handler to remove item
  const handleRemoveItem = () => {
    setWishlistProduct(wishlistProduct.filter((item) => item.product_id !== product_id));
  };

  return (
    <div className="flex justify-between items-center md:px-14">
      <div className="flex gap-2">
        <img className="w-1/12" src={product_image} alt={product_title} />

        <div>
          <h1>{product_title}</h1>
          <p className="text-xs">{description}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
      <button onClick={handleRemoveItem} className="btn btn-error text-white">
        <RiDeleteBinFill />
      </button>
    </div>
  );
}

export default WishlistContainer;
