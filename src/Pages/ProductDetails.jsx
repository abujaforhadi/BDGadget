import { useEffect } from "react";
import Heading from "../Components/Heading";
import SingleProduct from "../Components/SingleProduct";

const ProductDetails = () => {
  useEffect(() => {
    document.title = "Product Details | BDGadget";
  }, []);
  return (
    <div className="w-full ">
      <div className="bg-customPurple pt-6 pb-36 ">
        <Heading
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <div>
        <div className="relative -mt-28  ">
          <SingleProduct></SingleProduct>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
