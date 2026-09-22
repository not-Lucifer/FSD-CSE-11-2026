import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlayout from "./Pages/Userlayout";
import Home from "./components/Home";
import RoutePage from "./Pages/RoutePage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Userlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<RoutePage title="My Carts" message="Your cart is ready for your next order." />} />
          <Route path="/orders" element={<RoutePage title="My Orders" message="Your orders will appear here after checkout." />} />
          <Route path="/settings" element={<RoutePage title="Settings" message="Manage your shopping preferences here." />} />
          <Route path="/logout" element={<RoutePage title="Logout" message="You have been logged out." />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
