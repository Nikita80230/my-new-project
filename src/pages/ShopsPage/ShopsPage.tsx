import { StyledShopsPage } from './Styled';
import { PharmaciesList, ProductList } from '@/components';

const ShopsPage = () => {
  return (
    <StyledShopsPage>
      <div className="content">
        <PharmaciesList />
        <ProductList />
      </div>
    </StyledShopsPage>
  );
};

export default ShopsPage;
