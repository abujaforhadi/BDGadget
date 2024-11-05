import { useContext } from "react";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { SelectedItem, WishlistItem } from "../MainLayout/MainLayout";
import ReactStars from "react-rating-stars-component";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const data = useLoaderData();
  const { id } = useParams();
  const product = data.find((p) => p.product_id === id);
  const [selectedProduct, setSelectedProduct] = useContext(SelectedItem);
  const [wishlistProduct, setWishlistProduct] = useContext(WishlistItem);

  const isInWishlist = wishlistProduct.some(
    (wishlistItem) => wishlistItem.product_id === product.product_id
  );

  const handleAddToCart = () => {
    if (
      !selectedProduct.some((item) => item.product_id === product.product_id)
    ) {
      setSelectedProduct([...selectedProduct, product]);
      toast.success("Added to cart!");
    } else {
      toast.warning("Already added to cart");
    }
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      setWishlistProduct([...wishlistProduct, product]);
      toast.success("Added to wishlist!");
    } else {
      toast.info("Already in wishlist");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-2/3 mx-auto bg-white rounded-lg shadow-md p-4">
        <div className="flex text-black">
          <div className="flex-1">
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full object-cover rounded-lg mb-6"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{product.product_title}</h2>
            <p className="text-xl font-semibold">${product.price}</p>
            {product.availability && (
              <span className="inline-block px-2 py-1 bg-green-100 text-green-700 font-semibold text-sm rounded">
                In Stock
              </span>
            )}
            <p className="mt-2">{product.description}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Specification:</h3>
              <ul className="list-decimal list-inside ml-4">
                {product.Specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center mt-4">
              <ReactStars
                count={5}
                value={product.rating}
                size={24}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="ml-2 text-gray-600">{product.rating}</span>
            </div>
            <p className="text-gray-800 mt-4">Brand: {product.brand}</p>
            <p className="text-gray-800">Warranty: {product.warranty}</p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary mt-6 bg-customPurple text-white font-semibold hover:bg-purple-700"
              >
                Add To Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                className={`btn btn-outline mt-6 text-customPurple font-semibold ${
                  isInWishlist ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isInWishlist}
              >
                <FaHeartCirclePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
