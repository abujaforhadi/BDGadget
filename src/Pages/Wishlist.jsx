import { useContext, useEffect, useState } from "react";
import { WishlistItem } from "../MainLayout/MainLayout";
import WishlistContainer from "../Components/WishlistContainer";


function Wishlist() {
  const [wishlistProduct, setWishlistProduct] = useContext(WishlistItem);
  const [isSorted, setIsSorted] = useState(false);

  const handleSortByPrice = () => {
    const sortedWishlist = [...wishlistProduct].sort((a, b) => b.price - a.price);
    setWishlistProduct(sortedWishlist);
    setIsSorted(true);
  };


 

  useEffect(() => {
    document.title = "DashBoard | Wishlist";
  }, []);

  return (
    <>
      <div>
        <div className="px-5">
          <div className="flex justify-between py-5">
            <h1 className="text-customPurple font-bold text-2xl">Wishlist</h1>
            <div className="flex gap-1 items-center">
              <button onClick={handleSortByPrice} className="btn btn-outline text-customPurple">
                Sort by Price
              </button>
             
            </div>
          </div>
        </div>
        <div>
          {wishlistProduct.length === 0 ? (
            <p className="text-center text-3xl text-customPurple mt-10">Your wishlist is empty.</p>
          ) : (
            wishlistProduct.map((p) => (
              <WishlistContainer key={p.product_id} p={p} />
            ))
          )}
        </div>
      </div>

     
    </>
  );
}

export default Wishlist;
