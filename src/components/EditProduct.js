import { useDispatch } from "react-redux";
import "../css/Editproduct.css";
import { editProduct } from "../productSlice";
import { useParams } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const EditProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const { id } = useParams();
  console.log("params", id);
  const navigate = useNavigate();
  const EditHandler = (e) => {
    e.preventDefault();
    const finalData = {
      id: id,
      title: title,
      text: text,
      price: price,
      img: img,
    };
    dispatch(editProduct(finalData));
    toast.success("Edit Product Successfully");
    navigate("/");
  };
  return (
    <div className="container-edit">
      <h1 className="edit-heading">Edit Product</h1>
      <form className="editfrom" onSubmit={EditHandler}>
        <input
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={text}
          placeholder="decription"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="img"
          value={img}
          placeholder="img"
          onChange={(e) => setImg(e.target.value)}
        />
        <div className="buttons">
          <input type="submit" value="cancel" className="cancel-btn" />
          <input type="submit" value="save" className="save-btn" />
        </div>
      </form>
      <Toaster />
    </div>
  );
};
export default EditProduct;
