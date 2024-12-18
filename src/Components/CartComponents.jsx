import { RiDeleteBinFill } from "react-icons/ri";
import { SelectedItem } from "../MainLayout/MainLayout";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartComponents({ p }) {
  const [selectedProduct, setSelectedProduct] = useContext(SelectedItem);
  
  const { product_id, product_title, description, price, product_image } = p;

  const handleRemoveItem = () => {
    setSelectedProduct(selectedProduct.filter((item) => item.product_id !== product_id));
    toast.error(`${product_title} has been removed from the cart`);
  };

  return (
    <div className="flex justify-between items-center md:px-14">
      <div className="flex gap-2">
        <img className="w-1/12" src={product_image} alt={product_title} />

        <div>
          <h1 className="text-customPurple font-medium text-xl">{product_title}</h1>
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

export default CartComponents;
