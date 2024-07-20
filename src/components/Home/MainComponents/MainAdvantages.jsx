import React, { Component } from 'react'
import styles from '../../../components/Home/MainComponents/advantages.module.css'

export class MainAdvantages extends Component {
  render() {
	 return (
		<section className={styles.section}>
		<div className={styles.main__container}>
			<div className={styles.main__advantages}>
				<h1 className={styles.advantages__title}>Наші переваги</h1>
				<div className={styles.advantages__items}>
					<article className={styles.advantages__item}>
						<div className={styles.advantages__icon}>
							<img src="/icon/check_mark.png" alt="icon" />
						</div>
						<div  className={styles.advantages__text}>Індивідуальний підбір</div>
						<div className={styles.advantages__info}>Кожен клієнт унікальний, тому ми підходимо до підбору авто особисто для вас, враховуючи всі ваши побажання та бюджет.</div>
					</article>
					<article className={styles.advantages__item}>
						<div className={styles.advantages__icon}>
					      	<img src="/icon/check_mark.png" alt="icon" />
						</div>
						<div  className={styles.advantages__text}>Кращі ціни</div>
						<div className={styles.advantages__info}>Завдяки налагодженим партнерським зв'язкам та глибокому аналізу ринку, ми пропонуємо найвигідніші ціни на автомобілі під замовлення</div>
					</article>
					<article className={styles.advantages__item}>
						<div className={styles.advantages__icon}>
					      	<img src="/icon/check_mark.png" alt="icon" />
						</div>
						<div  className={styles.advantages__text}>Професійний підхід</div>
						<div className={styles.advantages__info}>Висококваліфіковані менеджери з великим досвідом роботи в сфері пригону авто гарантують якість на кожному етапі вашого замовлення.
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
	 )
  }
}

export default MainAdvantages