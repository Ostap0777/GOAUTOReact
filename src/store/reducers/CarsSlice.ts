import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cars } from '../../Models/models';

interface CarsState {
  carsHome: Cars[];
  carsUsaHome: Cars[];
  carsAvailable: Cars[];
  carsUsa:Cars[];
  loading: boolean;
  error: string | null;
}

const initialState: CarsState = {
  carsHome: [],
  carsUsaHome: [], 
  carsAvailable: [],
  carsUsa:[],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    carsFetching(state) {
      state.loading = true;
      state.error = null;
    },
    carsHomeFetchingSuccess(state, action: PayloadAction<Cars[]>) {
      state.carsHome = action.payload; 
      state.loading = false;
    },
	 carsUsaHomeFetchingSuccess(state, action: PayloadAction<Cars[]>) {
      state.carsUsaHome = action.payload; 
      state.loading = false;
    },
	 carsAvailableFetchingSuccess(state, action: PayloadAction<Cars[]>) {
      state.carsAvailable = action.payload; 
      state.loading = false;
    },
	 carsUsaFetchingSuccess(state, action: PayloadAction<Cars[]>) {
      state.carsUsa= action.payload; 
      state.loading = false;
    },

    carsFetchingError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {carsFetching, carsHomeFetchingSuccess,  carsUsaHomeFetchingSuccess, carsAvailableFetchingSuccess, carsUsaFetchingSuccess,carsFetchingError} = carsSlice.actions;
export default carsSlice.reducer;
