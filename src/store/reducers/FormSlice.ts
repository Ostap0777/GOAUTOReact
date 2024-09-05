import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormErrors } from '../../Models/models';

const initialState = {
  name: '',
  email: '',
  phone: '',
  text: '',
  errors: {
    name: '',
    email: '',
    phone: '',
    text: '',
  } as FormErrors
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    validateForm: (state) => {
      const errors: FormErrors = {};
      if (!state.name) errors.name = 'Ім\'я є обов\'язковим.';
      if (!state.email) {
        errors.email = 'Email є обов\'язковим.';
      } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        errors.email = 'Невірний формат email.';
      }
      if (!state.phone) {
        errors.phone = 'Телефон є обов\'язковим.';
      } else if (!/^\d{10}$/.test(state.phone)) {
        errors.phone = 'Невірний формат телефону. Введіть 10 цифр.';
      }
      if (!state.text) {
        errors.text = 'Повідомлення є обов\'язковим.';
      } else if (state.text.length < 10) {
        errors.text = 'Повідомлення має містити принаймні 10 символів.';
      }
    
	 if (Object.keys(errors).length === 0) {
		state.errors = errors;
		state.name = '';
		state.email = '';
		state.phone = '';
		state.text = '';
	 } else {
		state.errors = errors;
	 } 
	}
  }
});

export const { setName, setEmail, setPhone, setText, validateForm } = formSlice.actions;
export default formSlice.reducer;
