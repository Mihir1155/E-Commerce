import React from "react";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Order from "./pages/Order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/MyState";
import Login from "./pages/resgistration/Login";
import SignUp from "./pages/resgistration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "./pages/allproducts/AllProducts";

const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteforAdmin>
                  <Dashboard />
                </ProtectedRouteforAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productInfo/:Id" element={<ProductInfo />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteforAdmin>
                  <AddProduct />
                </ProtectedRouteforAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRouteforAdmin>
                  <UpdateProduct />
                </ProtectedRouteforAdmin>
              }
            />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </div>
  );
};

//Route for user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  // console.log(user);
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// Route for admin

export const ProtectedRouteforAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  //console.log(admin.user.email);
  if (admin.user.email === "mihirsahoo1155@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default App;
