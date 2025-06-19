import { createContext, useContext, useState } from "react"


const GlobalContext = createContext(undefined);
export function GlobalProvider({children}){

    //global state for cart
    const [cart, setCart] = useState([]);

    function addToCart(product){
        setCart(function(prevCart){
            return [...prevCart, product]
        })
    }

    function removeFromCart(productId){
        setCart(function(prevCart){
            return prevCart.filter(item => item.id !== productId)
        })
    }


    return (
        <GlobalContext.Provider
        value={{cart, addToCart, removeFromCart}}
        >
            {children}

        </GlobalContext.Provider>
    )

}
export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
  };

