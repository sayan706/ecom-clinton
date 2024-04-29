import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Home from "../components/home";
import About from "../components/About";
import Contact from "../components/Contact";
import Products from "../components/Products";
import Login from "../components/Login";
import Register from "../components/Register";
import Page404 from "../components/Page404";
import { ProtectedRoute } from "./ProtectedRoute";
import Account from "../components/account";
import Addresses from "../components/account/Addresses";
import Orders from "../components/account/Orders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* public routes */}
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="account">
        <Route index element={<Account />} />
        <Route path="orders" element={<Orders />} />
        <Route path="addresses" element={<Addresses />} />
      </Route>

      {/* we want to protect these routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

export default router;
