import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav">
        <li className="ecom-nav">
          <Link to="/">ecommarce</Link>
        </li>
        <li>Products</li>
        <li style={{ flex: 2 }}>
          <Link to="/addproduct">
            <button className="btn">Add To Product </button>
          </Link>
        </li>
        <li>Prakash</li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/1184/1184438.png" />
        </li>
        <li>
          <img src="https://cdn-icons-png.flaticon.com/512/891/891407.png" />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
