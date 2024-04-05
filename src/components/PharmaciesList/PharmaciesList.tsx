import { pharmacies } from '@/data/pharmacies';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  selectPharmacy,
  setChosenPharmacy,
  unSetChosenPharmacy,
} from '@/redux/pharmacy/pharmacySlice';
import { Pharmacy } from '@/types/Pharmacy';

import { StyledPharmaciesList } from './Styles';

const PharmaciesList = () => {
  const dispatch = useAppDispatch();
  const pharmacy = useAppSelector(selectPharmacy);

  const handleClick = (pharmacyObj: Pharmacy, event: React.MouseEvent<HTMLButtonElement>) => {
    const elementClass = event.currentTarget.classList;

    elementClass.value.includes('active')
      ? elementClass.remove('active')
      : elementClass.add('active');

    if (pharmacy?.id === pharmacyObj.id) dispatch(unSetChosenPharmacy());
    if (pharmacy?.id !== pharmacyObj.id) dispatch(setChosenPharmacy(pharmacyObj));
  };

  return (
    <StyledPharmaciesList>
      {Array.isArray(pharmacies) &&
        pharmacies.map(pharmacy => {
          return (
            <button
              className="pharmacyBtn"
              key={pharmacy.id}
              type="button"
              onClick={event => handleClick(pharmacy, event)}
            >
              {pharmacy.companyName}
            </button>
          );
        })}
    </StyledPharmaciesList>
  );
};

export default PharmaciesList;
