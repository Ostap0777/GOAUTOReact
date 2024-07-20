import React, { Component } from 'react'

import styles from '../../../components/Home/MainComponents/services.module.css'

export class MainServices extends Component {
  render() {
	 return (
		<section className={styles.section}>
			<div className={styles.service__container}>
				<h1 className={styles.service__title}>Послуги які ми надаємо</h1>
				<div className={styles.service__items}>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/parking-lot.png" alt="" />
						<p className={styles.service__name}>Автоплощадка</p>
						<p className={styles.service__info}>Великий вибір автомобілів різних марок та моделей, які вже чекають на своїх власників</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item }>
						<img className={styles.service__image} src="/icon/car-sell.png" alt="" />
						<p className={styles.service__name}>Автокоміс</p>
						<p className={styles.service__info}>Продайте свій автомобіль швидко і без зайвих хлопотів за вигідною ціною</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/car-sell1.png" alt="" />
						<p className={styles.service__name}>Автовикуп</p>
						<p className={styles.service__info}>Миттєвий викуп вашого автомобіля за чесною ринковою ціною.</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/cars_replace.png" alt="" />
						<p className={styles.service__name}>Обмін авто</p>
						<p className={styles.service__info}>Поновіть свій автопарк, обмінивши старе авто на нове без зайвих хлопотів</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/available_car.png" alt="" />
						<p className={styles.service__name}>Авто в наявності</p>
						<p className={styles.service__info}>Перевірте актуальні пропозиції автомобілів, які доступні для негайного придбання</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/ferry-boat.png"  alt="" />
						<p className={styles.service__name}>Авто під замовлення</p>
						<p className={styles.service__info}>Виберіть авто своєї мрії з США, Європи, Кореї</p>
						<button className={styles.service__button}></button>
					</div>
					<div className={styles.service__item}>
						<img className={styles.service__image} src="/icon/deal.png" alt="" />
						<p className={styles.service__name}>Авто в кредит та лізинг</p>
						<p className={styles.service__info}>Зробіть свою мрію реальністю завдяки зручним умовам фінансування</p>
						<button className={styles.service__button}></button>
					</div>
				</div>
			</div>
		</section>
	 )
  }
}

export default MainServices