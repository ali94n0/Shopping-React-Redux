import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CardPage/CardPage";
import CartProvider from "./providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChackeoutPage from "./pages/ChackoutPage/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import AuthProvider from "./providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProductsProvider from "./providers/pruductsProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <ToastContainer />
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<ChackeoutPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
            </Layout>
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
