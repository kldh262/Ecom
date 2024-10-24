import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://placehold.co/600x400?text=${[
            product.name,
            product.price,
          ].join("+")}&font=roboto`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.details}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={
              () => navigate("/product/" + product.id)
            }
          >
            Buy Now
          </button>
          {/* //figure out how to add to cart(needs a cart in the api) */}
          {/* <button
            className="btn btn-primary ml-8"
            onClick={
              () => navigate("/product/" + product.id)
            }
          >
            Add to cart
          </button> */}
        </div>
      </div>
    </div>
  );
}