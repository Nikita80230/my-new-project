import { pills } from '@/data/pills';
import { Product } from '@/components';
import { StyledProductList } from './Styled';
import { useAppSelector } from '@/hooks/hooks';
import { selectIsPharmacyChosen, selectPharmacy } from '@/redux/pharmacy/pharmacySlice';
// import { useEffect } from 'react';

const ProductList = () => {
  const pharmacy = useAppSelector(selectPharmacy);
  const isPharmacy = useAppSelector(selectIsPharmacyChosen);

  const filteredPills = isPharmacy
    ? pills.filter(pill => pill.pharmacy === pharmacy?.companyName)
    : pills;

  return (
    <StyledProductList>
      {Array.isArray(filteredPills) &&
        filteredPills.map(pill => {
          return <Product pill={pill} key={pill.id} />;
        })}
    </StyledProductList>
  );
};

export default ProductList;
