// import { useDispatch } from "react-redux";
// import "../css/Productcart.css";
// import { removeProduct } from "../productSlice";
// const ProductCart = (props) => {
//   console.log("propsCart", props.products);
//   const { products} = props;
//   console.log(products.id)
//   const dispatch =useDispatch()

//   const RemoveHandler =(id)=>{
//     console.log("remove",id)
//       dispatch(removeProduct(id))
//   }

//   return (
//     <div className="cart-container">
//       <div>
//         <div className="cart-heading">
//           <h5> {products.title}</h5>
//         </div>
//         <div className="cart-img">
//           <img src={products.img} alt="Imge" />
//         </div>
//         <div className="description-container">
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text.
//           </p>
//         </div>
//         <div className="cart-value">
//           <p>Price :{products.price}</p>
//           <p>Qty :{products.qty}</p>
//         </div>
//         <div className="remove-btn">
//           <button onClick={()=>RemoveHandler(products.id)}>Remove</button>
//           <button>Edit</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductCart;
