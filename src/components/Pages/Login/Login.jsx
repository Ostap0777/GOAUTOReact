import React from 'react'
import styles from '../../Pages/Login/login.module.scss'

import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'


export default function Login() {
  return (
	<>
	<div className='wrapper'>
	<Header/>
	
	<section className={styles.section}>
		<img className={styles.login__image} src="/login/1_1633 (1) 2-1.jpg"alt="" />
       <div className={styles.login__container}>
			<h1 className={styles.login__title}>Ласкаво просимо!</h1>
			<form className={styles.login__form} action="">
				<h2 className={styles.login__hello}>Вхід</h2>
				<label className={styles.login__label} htmlFor="">Email:</label>
				<input placeholder='Email' className={styles.login__input} type="text" name="" id="" />
				<label className={styles.login__label} htmlFor="">Пароль:</label>
				<input placeholder='Password' className={styles.login__input} type="text" />
				<p className={styles.login__forget}>Забули пароль?</p>
				<button className={styles.login__button}>Вхід</button>
			</form>
		 </div>
		 </section>
		 </div>
		 <Footer/>
	 </>
  )
}
