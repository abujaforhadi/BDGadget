const Card = ({ product }) => {
  console.log(product);
  const {product_title,product_image,price,product_id}=product;
  return (
    <div className="card bg-white  ">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-left text-left">
        <h2 className="card-title">{product_title}</h2>
        <p>Price: ${price} </p>
        <div className="card-actions">
          <button className="btn btn-outline text-customPurple">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
