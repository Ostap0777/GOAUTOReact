import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import styles from '../About-us/about-us.module.scss'



export default function aboutus() {
  return (
	<>
	<Header/>
	<img className={styles.about__background} src="/about-us/7d201904fe57a78a29b495cd7fb4508e.jpg" alt="" />
	<div className="about__container">
	 <div className='wrapper'>
			<section className={styles.about__section}>
				<div className={styles.about__welcome}>
			     <h1 className={styles.about__title}>Про нас</h1>
				  <p className={styles.about__text}><span>Go-Auto</span> - більше ніж авто з США</p>
				</div>
					<div className={styles.history__items}>
						<div className={styles.history__item}>
							<div className={styles.history__content}>
								<span className={styles.content__title}>Початок нашої історії 2018 року.</span>
								<p className={styles.content__info}>У момент, коли авто з Європи стали чимось суперечливим та ненадійним, а на ринку України стабільністю були неадекватні ціни, виникла потреба у рішенні цієї проблеми. Рішенні для усіх, кому потрібен автомобіль.</p>
							</div>
							<div className={styles.history__content}>
							   <span className={styles.content__title}>Ми обрали Америку -</span>
							   <p className={styles.content__info}>тому що не дивлячись на нібито складну доставку, авто з США варті того, аби купувати та привозити їх до України. Краща комплектація, прозора історія, ніяких скручених пробігів та ціна – на 20-30% нижча, аніж в Україні. Переваг більш ніж достатньо, аби позбутися думки про купівлю битої-фарбованої машини на місцевому ринку.</p>
							</div>
							<div className={styles.history__content}>
							   <span className={styles.content__title}>Спершу перевірили на собі -</span>
							   <p className={styles.content__info}> і досі їздимо лише на авто з Америки. Особистий досвід та досвід вже сотень клієнтів дозволяє нам стверджувати, що пригон авто з США – найкращий варіант для України.</p>
							</div>
						</div>
						<div className={styles.history__item__image}>
							<img className={styles.history__image} src="/about-us/80063c8dd2bbcef8794593f83de5938a.jpg" alt="" />
						</div>
					</div>
			</section>
			<section className={styles.mission__section}>
					<div className={styles.content__items}>
						<div className={styles.content__item}> 
				         <h2 className={styles.mission__title}>Місія компанії Go Auto</h2>
				         <p className={styles.mission__content}>Із звичайної потреби придбати машину за адекватні гроші народилася місія Boss Auto: <span>зробити авто із Америки реальністю для кожного покупця.</span></p>
				         <p className={styles.mission__content}>Зробити це так, аби купівля була простою та надійною. Аби можна було придбати авто, не думаючи про скручений пробіг чи майстерно заховані пошкодження. Не думати, де та в чому був обман. Не торгуватися за машину, яка не варта тих грошей.</p>
				         <p className={styles.mission__content}>Допомогти купити мрію. Машину, яку клієнт дійсно хоче та може собі дозволити. На якій буде їздити комфортно, в кайф, відчуваючи усю потужність та якість авто із кращою комплектацією, хорошим технічним станом та запасом міцності на роки вперед.</p>
				         <p className={styles.mission__content}>Це і є філософія Boss Auto. Це – основа нашого підходу до надання послуг та мірило якості.</p>
						</div>
						<div className={styles.image__item}>
							<img className={styles.content__image} src="/about-us/nlty3w---c1905x698x50px50p--f0939fc80c9b35a301880cd63b4d4de8.jpg" alt="" />
						</div>
					</div>
			</section>
			<section  className={styles.partner__section}>
				<div className={styles.partner__items}>
					<div className={styles.partner__content}>
				     <h2 className={styles.partner__title}>Партнери</h2>
				     <p className={styles.partner__content}>Одне з наших головных досягнень - те, що ми цілком перейшли на власну доставку. Це означа, що транспортування буде швидким, авто - застраховане від пошкоджень.</p>
			        <p className={styles.partner__content}>А ціна – нижчою за рахунок відсутності посередників.</p>
				     <p className={styles.partner__content}>Окрім цього, ми самостійно розмитнюємо авто, робимо ремонт та сертифікацію – і тому кінцева вартість авто стає меншою для клієнта Boss Auto.</p>
				     <p className={styles.partner__content}>Для нас цілковита автономність це – зручність, можливість виконувати роботу швидше та гарантувати результат.</p>
				     <p className={styles.partner__content}>Наші єдині партнери – офіси Boss Auto в інших містах Украни. Їх відкрили люди, що вирішили презентувати наш бренд та поділяють міссію та цінності компанії.</p>
				   </div>
					<div className={styles.partner__image}>
						<img className={styles.partner__img}src="/about-us/2022-bmw-x1-12.jpg" alt="" />
					</div>
				</div>
			</section>
		</div>
		</div>
	 <Footer/>
	 </>
  )
}
