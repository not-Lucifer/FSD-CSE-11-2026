import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/carts">My Carts</NavLink>
      <NavLink to="/orders">My Orders</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default Navbar;
