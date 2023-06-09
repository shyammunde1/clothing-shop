import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import  {DropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map((item)=>(
          <CartItem key={item.id} cartItem={item} />
        ))):(<EmptyMessage as='span'>Your cart is empty</EmptyMessage>)}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
