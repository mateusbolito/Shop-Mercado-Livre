import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import Provider from "./components/context/Provider";



export function App() {
  
  return (
    <Provider>
     <Header />
     <Products />
     <Cart />
    </Provider>
  )
}


