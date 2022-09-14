import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CardPage";
import CartProvider from "./providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChackeoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<ChackeoutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
