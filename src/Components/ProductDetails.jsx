import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams(); // Extract id from URL params
    const product = data.find(p => p.product_id === id); // Find the product by id

    console.log(data, { id }, product); // Log the data, id, and found product

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.product_title}</h1>
                    <img src={product.product_image} alt={product.product_title} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Warranty: {product.warranty}</p>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetails;
