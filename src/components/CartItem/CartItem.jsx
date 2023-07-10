import { BsCartDashFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import './CartItem.css'
import formatCurrency from '../../utils/FormatCurrency';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

export function CartItem({data}) {
    const {cartItems, setCartItems} = useContext(AppContext);
    const {id, thumbnail, title, price} = data


    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
      };
    return(
        <section className="cart-item">
            <img src={thumbnail} alt="imagem produto" className="cart-item-image" />

             <div className="cart-item-content">
                <h3 className="cart-item-title">{title} </h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')} </h3>

                <button className="button__remove-item"
                 onClick={handleRemoveItem}
                >
                <BsCartDashFill />
                </button>
             </div>
        </section>
    )
}  

CartItem.propTypes = {
    data: propTypes.object
  }.isRequired;