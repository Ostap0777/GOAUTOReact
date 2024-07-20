import React from 'react'
import styles from '../../components/Footer/Footer.module.css'


export default function Footer() {
  return (
	 <footer className={styles.footer}>
	   <div className={styles.footer__container}>
	     <img className={styles.footer__image} src="/icon/iconGoAuto.png"alt='Icon 1' />
		  <div className={styles.footer__social}>
			<div className={styles.social__info}>
			     <img className={styles.social__foto} src="/footer/pngegg.png" alt="" />
			     <a href="https://www.instagram.com/goautolviv/" className={styles.social__link}>Go Auto Lviv</a>
			</div>
	     	<div className={styles.social__info}>
	      		<img className={styles.social__foto} src="/footer/free-icon-tik-tok-3046132.png" alt="" />
		      	<a href="https://www.tiktok.com/@goautolviv/" className={styles.social__link}>goautolviv</a>
			</div>
			<div className={styles.social__info}>
		      	<img className={styles.social__foto} src="/footer/icons8-facebook-40.png" alt="" />
		      	<a href="https://www.facebook.com/profile.php?id=61551881780072" className={styles.social__link}>goautolviv</a>
			</div>
			<div className={styles.social__info}>
	      		<img className={styles.social__foto} src="/footer/icons8-телефон-30.png" alt="" />
		      	<a href="#" className={styles.social__link}> 097 430 05 70</a></div>			
			<div className={styles.social__info}>
		   		<img className={styles.social__foto} src="/footer/icons8-телеграм-50 (1).png" alt="" />
		      	<a href="https://t.me/goautolviv" className={styles.social__link}>t.me/goautolviv</a>
			</div>
		  </div>
	  </div>
	 </footer>
  )
}
