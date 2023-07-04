import { useState } from "react";
import "../css/Addproduct.css";
import { addProduct } from "../productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({ title: name, price: price, descrition: text, img: img })
    );
    toast.success("Add Product Successfully");
    // toast("Good Job!", {
    //   icon: "👏",
    // });
    navigate("/");
  };

  return (
    <div className="add-container">
      <h2 className="add-heading">Add a Product</h2>
      <form className="input-container" onSubmit={HandleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          type="imge"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="img"
        />
        <input type="submit" value="Add Product" className="add-btn" />
      </form>
      <Toaster />
    </div>
  );
};
export default AddProduct;
