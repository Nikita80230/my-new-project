import { FC } from 'react';
import { Pill } from '@/types/Pill';
import { StyledProduct } from './Styled';
import { useAppDispatch } from '@/hooks/hooks';
import { addToCart } from '@/redux/cart/cartSlice';
import Notiflix from 'notiflix';

type Props = {
  pill: Pill;
};

const Product: FC<Props> = ({ pill }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (pill: Pill) => {
    dispatch(addToCart(pill));
    Notiflix.Notify.success('Item was added to cart');
  };

  return (
    <StyledProduct>
      <div className="card">
        <img className="pillImg" src={pill.pillImg} alt="pill img" />
        <div className="pillInfo">
          <h3 className="pillTitle">{pill.medicineTitle}</h3>
          <span className="pillPrice">${pill.price}</span>
        </div>
        <span className="pillPharmacyName">{pill.pharmacy}</span>
        <button className="pillAddBtn" type="button" onClick={() => handleAddToCart(pill)}>
          Add to cart
        </button>
      </div>
    </StyledProduct>
  );
};

export default Product;
