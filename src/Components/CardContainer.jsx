import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { TbError404 } from "react-icons/tb";

const CardContainer = () => {
  const obj = useParams();
  console.log(obj);

  const product = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const copyData = [...product];
    if (obj.category) {
      const filterProducts = copyData.filter(
        (p) => p.category === obj.category
      );
      setProducts(filterProducts);
    } else setProducts(copyData.slice(0, 6));
  }, [product, obj.category]);

  const handleViewAll = () => {
    if (products.length < product.length) {
      setProducts(product);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.product_id} product={product}></Card>
          ))
        ) : (
          <div className="col-span-full  text-red-600 font-bold text-2xl">
            <div className="text-center py-10">
              <h6>No products found for this category. </h6>
            </div>
          </div>
        )}
      </div>
      {products.length > 0 &&
        (obj.category
          ? products.length <
            product.filter((p) => p.category === obj.category).length
          : products.length < product.length) && (
          <button className="btn" onClick={handleViewAll}>
            View All
          </button>
        )}
    </>
  );
};

export default CardContainer;
