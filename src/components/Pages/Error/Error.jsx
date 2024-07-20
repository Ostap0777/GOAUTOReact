import React from 'react'
import styles from '../Error/Error.module.css'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
	 <section className={styles.section}>
		<div className={styles.error__container}>
			<h1 className={styles.error__title}>Ви перейшли на не існуючу сторінку!</h1>
			<Link to="/" className={styles.error__button}>На Головну</Link>
		</div>
	 </section>
  )
}
