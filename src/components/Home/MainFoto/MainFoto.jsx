import React, { Component } from 'react'
import styles from '../../Home/MainFoto/mainfoto.module.scss'
export class MainFoto extends Component {
  render() {
	 return (
		<main className={styles.main}>
			<img src="/icon/ef8c9ed5a0077a6dd6e234e8185166e0.jpg" className={styles.main__image} alt="" />
			<div className={styles.main__container}>
				<div className={styles.main__items}>
					<div className={styles.main__item}>
						<h2 className={styles.main__title}>Go auto</h2>
						<p className={styles.main__text__one}>Шлях до ідеального авто стає простішим!</p>
						<p className={styles.main__text__two}>Експертна допомога у виборі Найвигідніші пропозиції для вас Беззаперечна якість та зручність послуг Від мрії до реального авто в один крок</p>
					</div>
					<div className={styles.main__item}>
						<form action="" className={styles.main__form}>
							<h2 className={styles.form__title}>Залишити заявку</h2>
							<input type="text" placeholder='Name' className={styles.input__name} />
							<input type="email" placeholder='Email' className={styles.input__email} />
							<input type="phone" placeholder='Phone' className={styles.input__phone} />
							<input type="text" placeholder='Your wishes'  className={styles.input__text} />
							<button className={styles.input__button}>Безкоштовна консультація</button>
						</form>
						</div>
				</div>
			</div>
		</main>
	 )
  }
}

export default MainFoto