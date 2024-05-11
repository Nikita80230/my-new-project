import { useAppSelector } from '@/hooks/hooks';
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct';
import { StyledCartItemsList } from './Styled';
import { selectCartItems } from '@/redux/cart/cartSlice';

const CartItemsList = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <StyledCartItemsList className="cartItemsList">
      {cartItems.map(item => {
        return <ShoppingCartProduct key={item.medicineTitle} item={item} />;
      })}
    </StyledCartItemsList>
  );
};

export default CartItemsList;
