import { FaHeartCirclePlus } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

function SingleProduct() {
  const data = useLoaderData();
  const { id } = useParams();
  const product = data.find((p) => p.product_id === id);

  return (
    <>
      
      <div className="w-2/3 mx-auto bg-white rounded-lg shadow-md p-4">
        {product ? (
          <div className="flex text-black">
            <div className="flex-1">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full   object-cover rounded-lg mb-6"
              />
            </div>
            <div className="">
              <h2 className="text-3xl font-semibold ">
                {product.product_title}
              </h2>
              <p className="text-xl font-semibold">${product.price}</p>
              {product.availability && (
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 font-semibold text-sm rounded">
                  In Stock
                </span>
              )}
              <p className=" mt-2">{product.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold ">Specification:</h3>
                <ul className="list-decimal list-inside  ml-4">
                  {product.Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-500 text-lg">
                  {Array.from({ length: Math.floor(product.rating) }).map(
                    (_, i) => (
                      <span key={i}>⭐</span>
                    )
                  )}
                  {product.rating % 1 !== 0 && <span>⭐</span>}
                </div>
                <span className="ml-2 text-gray-600">{product.rating}</span>
              </div>
              <p className="text-gray-800 mt-4">Brand: {product.brand}</p>
              <p className="text-gray-800">Warranty: {product.warranty}</p>
              <div className=" flex items-center gap-2">
              <button className="btn btn-primary  mt-6  bg-customPurple text-white font-semibold hover:bg-purple-700">
                Add To Cart
              </button>
              <button className="btn btn-outline  mt-6  text-customPurple font-semibold">
              <FaHeartCirclePlus />

              </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
}
export default SingleProduct;
