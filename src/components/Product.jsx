import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./product.scss";
// Product page
const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let savedProducts = useSelector((state) => state.product.products);
  let isLoading = useSelector((state) => state.product.isLoading);

  const productDescription = (description) => {
    if (description.length > 480) {
      return `${description.substr(0, 479)}...`;
    }
    return description;
  };

  useEffect(() => {
    setProducts(savedProducts);
  }, [savedProducts, dispatch]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return (
    <div className="product-container">
      {!loading ? (
        <div className="product-holder">
          {products &&
            products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-holder">
                  <img
                    className="product-image"
                    src={product.image}
                    title={product.title}
                    alt={product.title}
                  />
                </div>
                <div className="product-title">{product.title}</div>
                <div className="product-description">
                  {productDescription(product.description)}
                </div>
                <div className="product-specs">
                  <div className="product-price">Buy @ ₹{product.price}</div>
                  <div className="product-rating">
                    {product.rating.rate}/5 rated by {product.rating.count}
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default Product;
