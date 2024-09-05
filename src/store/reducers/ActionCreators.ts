import { AppDispatch } from '../store';
import axios from 'axios';
import { Cars } from '../../Models/models';
import { carsFetching, carsHomeFetchingSuccess, carsUsaFetchingSuccess, carsFetchingError, carsAvailableFetchingSuccess, carsUsaHomeFetchingSuccess } from './CarsSlice';

export const fetchCarsHome = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(carsFetching());
    const response = await axios.get<Cars[]>('https://carhome2024-f2095-default-rtdb.firebaseio.com/cars.json');
    dispatch(carsHomeFetchingSuccess(response.data));
  } catch (e) {
    dispatch(carsFetchingError(e.message));
  }
};

export const fetchCarsHomeUsa = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(carsFetching());
    const response = await axios.get<Cars[]>('https://carhome2024-f2095-default-rtdb.firebaseio.com/carsUsa.json');
    dispatch(carsUsaHomeFetchingSuccess(response.data));
  } catch (e) {
    dispatch(carsFetchingError(e.message));
  }
};


export const fetchCarsAvailable = () => async (dispatch: AppDispatch) => {
	try {
	  dispatch(carsFetching());
	  const response = await axios.get<Cars[]>('https://cars-cbca7-default-rtdb.firebaseio.com/cars.json');
	  dispatch(carsAvailableFetchingSuccess(response.data));
	} catch (e) {; 
	  dispatch(carsFetchingError(e.message));
	}
 };

 export const fetchCarsUsa = () => async (dispatch: AppDispatch) => {
	try {
	  dispatch(carsFetching());
	  const response = await axios.get<Cars[]>('https://cars-cbca7-default-rtdb.firebaseio.com/carsUsa.json');
	  dispatch(carsUsaFetchingSuccess(response.data));
	} catch (e) {
	  dispatch(carsFetchingError(e.message));
	}
 };

