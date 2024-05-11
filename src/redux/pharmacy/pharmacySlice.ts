import { Pharmacy } from '@/types/Pharmacy';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type InitialPharmacyState = {
  chosenPharmacy: Pharmacy | null;
};

const initialPharmacyState: InitialPharmacyState = {
  chosenPharmacy: null,
};

const pharmacySlice = createSlice({
  name: 'pharmacy',
  initialState: initialPharmacyState,
  reducers: {
    setChosenPharmacy: (state, action: PayloadAction<Pharmacy>) => {
      state.chosenPharmacy = action.payload;
    },
    unSetChosenPharmacy: state => {
      //, action: PayloadAction<Pharmacy>
      state.chosenPharmacy = null;
    },
  },
  //   extraReducers: builder => {},
});

export const selectPharmacy = (state: RootState) => state.pharmacy.chosenPharmacy;

export const { setChosenPharmacy, unSetChosenPharmacy } = pharmacySlice.actions;
export const pharmacyReducer = pharmacySlice.reducer;
