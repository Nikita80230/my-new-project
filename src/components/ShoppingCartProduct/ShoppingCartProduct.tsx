import { FC, useState } from 'react';

import { Pill } from '@/types/Pill';

import IncreaseIcon from '@/assets/plus-circle.svg?react';
import DecreaseIcon from '@/assets/minus-circle.svg?react';
import TrashIcon from '@/assets/trash.svg?react';

import { StyledShoppingCartProduct } from './Styled';
import { useAppDispatch } from '@/hooks/hooks';
import { removeItem } from '@/redux/cart/cartSlice';

type Props = {
  item: Pill;
};

const ShoppingCartProduct: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);

  const handleRemove = (item: Pill) => {
    dispatch(removeItem(item));
  };

  return (
    <StyledShoppingCartProduct>
      <div className="cartProduct">
        <img className="cartProductImg" src={item.pillImg} alt={item.medicineTitle} />
        <div className="cartProductInfo">
          <h3 className="cartProductTitle">{item.medicineTitle}</h3>
          <span className="cartProductPrice">Price: ${item.price}</span>
          <div className="cartProductQuantity">
            <button className="quantityBtn increase" onClick={() => setQuantity(quantity + 1)}>
              <IncreaseIcon />
            </button>
            <input
              className="quantityInput"
              type="text"
              name=""
              id=""
              placeholder={quantity.toString()}
            />
            <button
              className="quantityBtn decrease"
              onClick={() => {
                if (quantity >= 2) setQuantity(quantity - 1);
              }}
            >
              <DecreaseIcon />
            </button>
            <button className="removePill" onClick={() => handleRemove(item)}>
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </StyledShoppingCartProduct>
  );
};

export default ShoppingCartProduct;
