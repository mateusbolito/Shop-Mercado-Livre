import { useState } from "react";
import AppContext from "./AppContext";

 export function Provider({children}) {
    const [products, setProducts,] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const value = {
    products,
    setProducts,
    loading,
    setLoading,
    isCartVisible,
    setIsCartVisible,
    cartItems,
    setCartItems,
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
} 
export default Provider;
