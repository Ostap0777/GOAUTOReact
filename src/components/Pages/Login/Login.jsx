import React, { useState } from 'react';
import styles from '../../Pages/Login/login.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formValidator, setFormValidator] = useState(true);

  const validateForm = () => {
    const newErrors = {};

    if (!email) newErrors.email = 'Email є обов\'язковим.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Невірний формат email.';

    if (!password) newErrors.password = 'Пароль є обов\'язковим.';

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setFormValidator(!isValid);
    return isValid;
  };

  const handleSubmit = (target) => {
    target.preventDefault();
  };

  return (
    <>
      <div className='wrapper'>
        <Header />
        <section className={styles.section}>
          <img className={styles.login__image} src="/login/1_1633 (1) 2-1.jpg" alt="" />
          <div className={styles.login__container}>
            <h1 className={styles.login__title}>Ласкаво просимо!</h1>
            <form className={styles.login__form} onSubmit={handleSubmit}>
              <h2 className={styles.login__hello}>Вхід</h2>
              <label className={styles.login__label} htmlFor="email">Email:</label>
              <input
                placeholder='Email'
                className={styles.login__input}
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className={styles.login__error}>{errors.email}</p>}
              <label className={styles.login__label} htmlFor="password">Пароль:</label>
              <input
                placeholder='Password'
                className={styles.login__input}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className={styles.login__error}>{errors.password}</p>}
              <p className={styles.login__forget}>Забули пароль?</p>
              <button className={styles.login__button} type="submit">Вхід</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
