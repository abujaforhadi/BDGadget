import { SelectedItem, WishlistItem } from "../MainLayout/MainLayout";
import { useContext } from "react";
import { toast } from "react-toastify";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";

function WishlistContainer({ p }) {
  const [wishlistProduct, setWishlistProduct] = useContext(WishlistItem);
  const [selectedProduct, setSelectedProduct] = useContext(SelectedItem);

  const { product_id, product_title, description, price, product_image } = p;
  const handleAddItem = () => {
    if (!selectedProduct.some((item) => item.product_id === product_id)) {
      setSelectedProduct([...selectedProduct, p]);
      toast.success("Added to cart!");
      setWishlistProduct(
        wishlistProduct.filter((item) => item.product_id !== product_id)
      );
    } else {
      toast.warning("Already added to cart");
    }
  };
  const handleRemoveItem = () => {
    setWishlistProduct(
      wishlistProduct.filter((item) => item.product_id !== product_id)
    );
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
      <div className="flex gap-1">
        <button
          onClick={handleAddItem}
          className="btn btn-primary bg-customPurple text-white"
        >
          Add to <MdOutlineShoppingCartCheckout />
        </button>
        <button onClick={handleRemoveItem} className="btn btn-error text-white">
          <RiDeleteBinFill />
        </button>
      </div>
    </div>
  );
}

export default WishlistContainer;
