import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import getAllProducts from "../services/getAllProducts";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => useContext(ProductsContextDispatcher);
