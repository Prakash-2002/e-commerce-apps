
import "../css/Productcart.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../productSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  // console.log("props", props);
  const { product } = props;

  const dispatch = useDispatch();

  const removeHandler = (Id) => {
    console.log("remove", Id);
    dispatch(removeProduct(Id));
    toast.success("Remove Product ");
  };

  return (
    <div className="product-container">
      {product.map(
        (item) => (
          (
            <div className="cart-container" key={item.id}>
              <div>
                <div className="cart-heading">
                  <h5> {item.title}</h5>
                </div>
                <div className="cart-img">
                  <img src={item.img} alt="Imge" />
                </div>
                <div className="description-container">
                  <p>{item.descrition}</p>
                </div>
                <div className="cart-value">
                  <p>Price :{item.price}</p>
                  <p>Qty :{item.qty}</p>
                </div>
                <div className="remove-btn">
                  <button onClick={() => removeHandler(item.id)}>Remove</button>
                  <Link to={`/edit/${item.id}`}>
                    <button>Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )
      )}
      <Toaster />
    </div>
  );
};
export default ProductItem;
