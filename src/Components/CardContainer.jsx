import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CardContainer = () => {
  const obj = useParams();
  console.log(obj);

  const product = useLoaderData();
  console.log(product);
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.product_id} product={product}></Card>
        ))}
      </div>
      <button className="btn " onClick={() => setProducts(product)}>
        view all
      </button>
    </>
  );
};

export default CardContainer;
