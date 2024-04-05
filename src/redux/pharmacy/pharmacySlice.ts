import { Pharmacy } from '@/types/Pharmacy';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialPharmacyState = {
  isPharmacyChosen: boolean;
  chosenPharmacy: Pharmacy | null;
};

const initialPharmacyState: InitialPharmacyState = {
  isPharmacyChosen: false,
  chosenPharmacy: null,
};

const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState: initialPharmacyState,
  reducers: {
    setChosenPharmacy: (state, action: PayloadAction<Pharmacy>) => {
      state.chosenPharmacy = action.payload;
      state.isPharmacyChosen = true;
    },
    unSetChosenPharmacy: state => {
      //, action: PayloadAction<Pharmacy>
      state.chosenPharmacy = null;
      state.isPharmacyChosen = false;
    },
  },
  //   extraReducers: builder => {},
});

export const selectPharmacy = (state: RootState) => state.pharmacy.chosenPharmacy;
export const selectIsPharmacyChosen = (state: RootState) => state.pharmacy.isPharmacyChosen;

export const { setChosenPharmacy, unSetChosenPharmacy } = pharmacySlice.actions;
export const pharmacyReducer = pharmacySlice.reducer;
