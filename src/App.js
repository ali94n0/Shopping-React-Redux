import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CardPage";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
