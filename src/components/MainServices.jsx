import React, { Component } from 'react'
import icon1 from '../img/icon/parking-lot.png'
import icon2 from '../img/icon/car-sell.png'
import icon3 from '../img/icon/car-sell1.png'
import icon4 from '../img/icon/cars_replace.png'
import icon5 from '../img/icon/available_car.png'
import icon6 from '../img/icon/ferry-boat.png'
import icon7 from '../img/icon/deal.png'

export class MainServices extends Component {
  render() {
	 return (
		<section className='section'>
			<div className='service__container'>
				<h1 className='service__title'>Послуги які ми надаємо</h1>
				<div className='service__items'>
					<div className='service__item service'>
						<img className='service__image' src={icon1} alt="" />
						<p className='service__name'>Автоплощадка</p>
						<p className='service__info'>Великий вибір автомобілів різних марок та моделей, які вже чекають на своїх власників</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon2} alt="" />
						<p className='service__name'>Автокоміс</p>
						<p className='service__info'>Продайте свій автомобіль швидко і без зайвих хлопотів за вигідною ціною</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon3} alt="" />
						<p className='service__name'>Автовикуп</p>
						<p className='service__info'>Миттєвий викуп вашого автомобіля за чесною ринковою ціною.</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon4} alt="" />
						<p className='service__name'>Обмін авто</p>
						<p className='service__info'>Поновіть свій автопарк, обмінивши старе авто на нове без зайвих хлопотів</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon5} alt="" />
						<p className='service__name'>Авто в наявності</p>
						<p className='service__info'>Перевірте актуальні пропозиції автомобілів, які доступні для негайного придбання</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon6} alt="" />
						<p className='service__name'>Авто під замовлення</p>
						<p className='service__info'>Виберіть авто своєї мрії з США, Європи, Кореї</p>
						<button className='service__button'></button>
					</div>
					<div className='service__item service'>
						<img className='service__image' src={icon7} alt="" />
						<p className='service__name'>Авто в кредит та лізинг</p>
						<p className='service__info'>Зробіть свою мрію реальністю завдяки зручним умовам фінансування</p>
						<button className='service__button'></button>
					</div>
				</div>
			</div>
		</section>
	 )
  }
}

export default MainServices