import { useContext, useState } from "react";
import { WishlistItem } from "../MainLayout/MainLayout";
import WishlistContainer from "../Components/WishlistContainer";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
function Wishlist() {
  const [wishlistProduct, setWishlistProduct] = useContext(WishlistItem);
  const [isSorted, setIsSorted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSortByPrice = () => {
    const sortedWishlist = [...wishlistProduct].sort((a, b) => b.price - a.price);
    setWishlistProduct(sortedWishlist);
    setIsSorted(true);
  };


  const totalCost = wishlistProduct.reduce((sum, product) => sum + product.price, 0);

 
  const handlePurchaseClick = () => {
    setShowSuccessModal(true); 
  };

 
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setWishlistProduct([]);
  };

  return (
    <>
      <div>
        <div className="px-5">
          <div className="flex justify-between py-5">
          <h1 className="text-customPurple font-bold text-2xl">Wishlist</h1>
            <div className="flex gap-1 items-center">
              <h2>Total cost: ${showSuccessModal ? "0.00" : totalCost.toFixed(2)}</h2>
              <button onClick={handleSortByPrice} className="btn btn-outline text-customPurple">
                Sort by Price
              </button>
              <button onClick={handlePurchaseClick} className="btn bg-customPurple text-white">
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div>
          {wishlistProduct.map((p) => (
            <WishlistContainer key={p.product_id} p={p} />
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

export default Wishlist;
