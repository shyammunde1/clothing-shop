
import { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { CartContext } from '../../contexts/cart.context'

 export const CartIcon= () => {
   const {isCartOpen,setIsCartOpen,itemcount} = useContext(CartContext)
   function toggleCartOpen(){
    setIsCartOpen(!isCartOpen)
   }
  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count '>{itemcount}</span>
    </div>
  )
}


