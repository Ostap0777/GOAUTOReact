import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setName, setEmail, setPhone, setText, validateForm } from '../../../store/reducers/FormSlice';
import styles from './mainfoto.module.scss';

const MainFoto = () => {
  const dispatch = useAppDispatch();
  const { name, email, phone, text, errors } = useAppSelector(state => state.form);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateForm());
  };

  return (
    <div>
      <main className={styles.main}>
        <img src="/icon/ef8c9ed5a0077a6dd6e234e8185166e0.jpg" className={styles.main__image} alt="" />
        <div className={styles.main__container}>
          <div className={styles.main__items}>
            <div className={styles.main__item}>
              <h2 className={styles.main__title}>Go auto</h2>
              <p className={styles.main__text__one}>Шлях до ідеального авто стає простішим!</p>
              <p className={styles.main__text__two}>
                Експертна допомога у виборі Найвигідніші пропозиції для вас Беззаперечна якість та зручність послуг Від мрії до реального авто в один крок
              </p>
            </div>
            <div className={styles.main__item}>
              <form onSubmit={handleSubmit} className={styles.main__form}>
                <h2 className={styles.form__title}>Залишити заявку</h2>

                <input 
                  placeholder='Name' 
                  className={styles.input__name} 
                  value={name} 
                  onChange={(e) => dispatch(setName(e.target.value))} 
                />
                {errors.name && <p className={styles.form__error}>{errors.name}</p>}

                <input  
                  type='text'
                  placeholder='Email' 
                  className={styles.input__email} 
                  value={email} 
                  onChange={(e) => dispatch(setEmail(e.target.value))} 
                />
                {errors.email && <p className={styles.form__error}>{errors.email}</p>}

                <input 
                  type="tel" 
                  placeholder='Phone' 
                  className={styles.input__phone} 
                  value={phone} 
                  onChange={(e) => dispatch(setPhone(e.target.value))} 
                />
                {errors.phone && <p className={styles.form__error}>{errors.phone}</p>}

                <input 
                  type="text" 
                  placeholder='Your wishes'  
                  className={styles.input__text} 
                  value={text}
                  onChange={(e) => dispatch(setText(e.target.value))} 
                />
                {errors.text && <p className={styles.form__error}>{errors.text}</p>}

                <button type="submit" className={styles.input__button}>
                  Безкоштовна консультація
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainFoto;
