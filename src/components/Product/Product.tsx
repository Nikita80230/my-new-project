import { FC } from 'react';
import { Pill } from '@/types/Pill';
import { StyledProduct } from './Styled';

type Props = {
  pill: Pill;
};

const Product: FC<Props> = ({ pill }) => {
  return (
    <StyledProduct>
      <div className="card">
        <img className="pillImg" src={pill.pillImg} alt="pill img" />
        <div className="pillInfo">
          <h3 className="pillTitle">{pill.medicineTitle}</h3>
          <span className="pillPrice">${pill.price}</span>
        </div>
        <span className="pillPharmacyName">{pill.pharmacy}</span>
        <button className="pillAddBtn" type="button">
          Add to cart
        </button>
      </div>
    </StyledProduct>
  );
};

export default Product;
