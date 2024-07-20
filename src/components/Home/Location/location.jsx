import React from 'react'
import styles from '../Location/location.module.css'
export default function location() {
  return (
	 <section className='section'>
		<div className={styles.location__container}>
			<h2 className={styles.location__title}>Де ми знайти?</h2>
			<div className={styles.location__content}>
			<div className={styles.content__left}>
				<a href="https://www.facebook.com/people/GO-AUTO-LVIV/61551881780072/" className={styles.location__link}>GO AUTO LVIV</a>
				<a href="https://www.instagram.com/goautolviv/" className={styles.location__link}>goautolviv</a>
				<a href="https://www.tiktok.com/@goautolviv/" className={styles.location__link}>goautolviv</a>
				<a href="tel:+380974300570" className={styles.location__link}>097 430 05 70</a>
				<a href="https://t.me/goautolviv" className={styles.location__link}>t.me/goautolviv</a>
			</div>
			<div className={styles.content__right}>wge</div>
			</div>
		</div>
	 </section>
  )
}
