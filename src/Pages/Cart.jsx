import { useContext, useState } from "react";
import { SelectedItem} from "../MainLayout/MainLayout";
import CartComponents from "../Components/CartComponents";

function Cart() {
  const [selectedProduct, setSelectedProduct] = useContext(SelectedItem);
  const [isSorted, setIsSorted] = useState(false); // Track whether items are sorted

  const handleSortByPrice = () => {
    const sortedMoney = [...selectedProduct].sort((a, b) => b.price - a.price);
    setSelectedProduct(sortedMoney);
    setIsSorted(true); 
  };

  return (
    <>
      <div>
        <div className="px-5">
          <div className="flex justify-between py-5">
            <h1>Cart</h1>
            <div className="flex gap-1 items-center">
              <h2>Total cost:</h2>
              <button onClick={handleSortByPrice} className="btn btn-outline text-customPurple">
                Sort by Price
              </button>
              <button className="btn bg-customPurple text-white">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div>
          {selectedProduct.map((p) => (
            <CartComponents key={p.product_id} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
