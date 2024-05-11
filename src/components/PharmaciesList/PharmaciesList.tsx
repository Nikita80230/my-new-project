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
  const selectedPharmacy = useAppSelector(selectPharmacy);

  const handleClick = (pharmacyObj: Pharmacy) => {
    if (selectedPharmacy?.id === pharmacyObj.id) dispatch(unSetChosenPharmacy());
    if (selectedPharmacy?.id !== pharmacyObj.id) dispatch(setChosenPharmacy(pharmacyObj));
  };

  return (
    <StyledPharmaciesList>
      {Array.isArray(pharmacies) &&
        pharmacies.map(pharmacy => {
          return (
            <button
              className={`pharmacyBtn ${pharmacy.companyName === selectedPharmacy?.companyName ? 'active' : ''}`}
              key={pharmacy.id}
              type="button"
              onClick={() => handleClick(pharmacy)}
            >
              {pharmacy.companyName}
            </button>
          );
        })}
    </StyledPharmaciesList>
  );
};

export default PharmaciesList;
