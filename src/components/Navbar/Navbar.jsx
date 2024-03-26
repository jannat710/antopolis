import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
//     <div className="nav-section">
//     <nav className="nav-container">
//         <h1 className='nav-logo'>Taste now</h1>
//         <ul className="nav-link">
//             <li>
//                 <NavLink
//                     to="/"
//                     className={({ isActive, isPending }) =>
//                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold " : ""
//                     }
//                 >
//                     Home
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/donation"
//                     className={({ isActive, isPending }) =>
//                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold " : ""
//                     }
//                 >
//                     Donation
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/statistics"
//                     className={({ isActive, isPending }) =>
//                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold " : ""
//                     }
//                 >
//                     Statistics
//                 </NavLink>
//             </li>
//         </ul>
//     </nav>
// </div>
<div className="nav-section">
  <nav className="nav-container">
    <h1 className='nav-logo'>Taste now</h1>
    <ul className="nav-link">
      <li>
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="nav-item"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          activeClassName="active"
          className="nav-item"
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          activeClassName="active"
          className="nav-item"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="active"
          className="nav-item"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          activeClassName="active"
          className="nav-item"
        >
          <IoCartOutline className='nav-item-cart' />
        </NavLink>
      </li>
      <p>
        <NavLink
          to="/contact"
          className="signup-button"
        >
          Contact Us
        </NavLink>
      </p>
    </ul>
  </nav>
</div>
  );
}

export default Navbar;