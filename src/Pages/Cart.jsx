import { useContext, useEffect, useState } from "react";
import { SelectedItem } from "../MainLayout/MainLayout";
import CartComponents from "../Components/CartComponents";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [selectedProduct, setSelectedProduct] = useContext(SelectedItem);
  const [isSorted, setIsSorted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSortByPrice = () => {
    const sortedProducts = [...selectedProduct].sort((a, b) => b.price - a.price);
    setSelectedProduct(sortedProducts);
    setIsSorted(true);
  };

  const totalCost = selectedProduct.reduce((sum, product) => sum + product.price, 0);

  const handlePurchaseClick = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSelectedProduct([]); 
    navigate("/");
  };

  useEffect(() => {
    document.title="DashBoard | Cart"
  },[])

  return (
    <>
      <div>
        <div className="px-5">
          <div className="flex justify-between py-5">
            <h1 className="text-customPurple font-bold text-2xl">Cart</h1>
            <div className="flex gap-1 items-center">
              <h2>Total cost: ${showSuccessModal ? "0.00" : totalCost.toFixed(2)}</h2>
              <button onClick={handleSortByPrice} className="btn btn-outline text-customPurple">
                Sort by Price
              </button>
              <button
                onClick={handlePurchaseClick}
                className="btn bg-customPurple text-white"
                disabled={selectedProduct.length === 0 || totalCost === 0}
              >
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

      {/* Payment Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
              <IoShieldCheckmarkSharp />

              </div>
            </div>
            <h2 className="text-xl font-semibold">Payment Successfully</h2>
            <p className="text-gray-500">Thanks for purchasing.</p>
            <p className="text-gray-500">Total: ${totalCost.toFixed(2)}</p>
            <button onClick={closeSuccessModal} className="mt-4 px-4 py-2 bg-gray-200 rounded-lg font-semibold text-gray-600 hover:bg-gray-300">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
