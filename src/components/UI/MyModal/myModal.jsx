import React from 'react';
import styles from '../../UI/MyModal/myModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setName, setEmail, setPhone, setText, validateForm } from '../../../store/reducers/FormSlice';

export default function MyModal({ active, setActive }) {
  const dispatch = useAppDispatch();
  const { name, email, phone, text, errors } = useAppSelector(state => state.form);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());
  };

  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
        <div className={styles.modal__title}>Залиште Заявку</div>
        <form className={styles.modal__form} onSubmit={handleSubmit} action="">
          <input 
            className={styles.modal__input} 
            placeholder='Імя' 
            type="text"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))} 
          />
          {errors.name && <p className={styles.form__error}>{errors.name}</p>}
          
          <input 
            className={styles.modal__input} 
            placeholder='Email' 
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))} 
          />
          {errors.email && <p className={styles.form__error}>{errors.email}</p>}
          
          <input 
            className={styles.modal__input} 
            placeholder='Номер телефону' 
            type="text"
            value={phone}
            onChange={(e) => dispatch(setPhone(e.target.value))} 
          />
          {errors.phone && <p className={styles.form__error}>{errors.phone}</p>}
          
          <input 
            className={`${styles.modal__input} ${styles.input__big}`} 
            placeholder='Ваші побажання' 
            type="text"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))} 
          />
          {errors.text && <p className={styles.form__error}>{errors.text}</p>}
          
          <button type="submit" className={styles.modal__button}>Безкоштовна консультація</button>
        </form>
      </div>
    </div>
  );
}
