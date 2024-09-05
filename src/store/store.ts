import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CarsReducer from "./reducers/CarsSlice";
import FormReducer from "./reducers/FormSlice";


const rootReducer = combineReducers ({
	cars: CarsReducer,
	form: FormReducer
})

export const  setupStore = () => {
	return configureStore( {
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']