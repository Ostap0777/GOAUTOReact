import React, { Component } from 'react'
import icon1 from '../img/icon/check_mark.png'

export class MainAdvantages extends Component {
  render() {
	 return (
		<section>
		<div className='main__container'>
			<div className='main__advantages advantages'>
				<h1 className='advantages__title'>Наші переваги</h1>
				<div className='advantages__items'>
					<article className='advantages__item '>
						<div className='advantages__icon'>
							<img src={icon1} alt="icon" />
						</div>
						<div  className='advantages__text'>Індивідуальний підбір</div>
						<div className='advantages__info'>Кожен клієнт унікальний, тому ми підходимо до підбору авто особисто для вас, враховуючи всі ваши побажання та бюджет.</div>
					</article>
					<article className='advantages__item'>
						<div className='advantages__icon'>
					      	<img src={icon1} alt="icon" />
						</div>
						<div  className='advantages__text'>Кращі ціни</div>
						<div className='advantages__info'>Завдяки налагодженим партнерським зв'язкам та глибокому аналізу ринку, ми пропонуємо найвигідніші ціни на автомобілі під замовлення</div>
					</article>
					<article className='advantages__item'>
						<div className='advantages__icon'>
					      	<img src={icon1} alt="icon" />
						</div>
						<div  className='advantages__text'>Професійний підхід</div>
						<div className='advantages__info'>Висококваліфіковані менеджери з великим досвідом роботи в сфері пригону авто гарантують якість на кожному етапі вашого замовлення.
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