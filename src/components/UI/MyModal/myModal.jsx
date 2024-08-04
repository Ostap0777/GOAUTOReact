import React from 'react'
import styles from '../../UI/MyModal/myModal.module.scss'

export default function myModal({active, setActive}) {
  return (
	<div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
		<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
			<div className={styles.modal__title}>Залиште Заявку</div>
			<form className={styles.modal__form} action="">
				<input className={styles.modal__input} placeholder='Імя'  type="text" />
				<input className={styles.modal__input} placeholder='Email' type="email" />
				<input className={styles.modal__input} placeholder='Номер телефону' type="phone" />
				<input className={`${styles.modal__input} ${styles.input__big}`} placeholder='Ваші побажання ' type="text" name="" id="" />
			</form>
			<button className={styles.modal__button}>Безкоштовна консультація</button>
		</div>
	</div>
  )
}
