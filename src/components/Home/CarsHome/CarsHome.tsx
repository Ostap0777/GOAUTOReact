
import React, { useEffect } from 'react';
import { UseDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './CarsHome.module.scss'
import { fetchCarsHome } from '../../../store/reducers/ActionCreators';

import Loader from '../../UI/Loader/Loader';
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom';


export default function CarsHome() {
	const dispatch = useAppDispatch();
	const { carsHome, loading, error } = useAppSelector(state => state.cars);
 
	useEffect(() => {
	  dispatch(fetchCarsHome());
	}, [dispatch]);
 
	return (
	  <section className={styles.main}>
		 <div className="cars__container">
			{loading && <Loader />}
			<h2 className={styles.car__title}>Авто на майданчику</h2>
			<Swiper
			  className={styles.slider__items}
			  spaceBetween={20}
			  navigation
			  loop={true}
			  modules={[Navigation]}
			  breakpoints={{
				 320: { slidesPerView: 1 },
				 640: { slidesPerView: 2 },
				 900: { slidesPerView: 3 },
			  }}
			>
			  {carsHome.map((car, index) => (
				 <SwiperSlide key={index}>
					<div className={styles.slider__item}>
					  <h2 className={styles.car__name}>{car.name}</h2>
					  <img className={styles.car__image} src={car.photo} alt="" />
					  <div className={styles.car__opus}>
						 Опис
						 <p className={styles.car__engine}>Двигун: {car.engine} {car.fuel}</p>
						 <p className={styles.car__transmission}>Коробка: {car.transmission}</p>
						 <p className={styles.car__run}>Пробіг: {car.run} км</p>
						 <p className={styles.car__price}>Ціна: {car.price} $</p>
					  </div>
					</div>
				 </SwiperSlide>
			  ))}
			</Swiper>
			<Button className={styles.car__button}>
			  <Link to='/cars'>Перегнути більше</Link>
			</Button>
		 </div>
	  </section>
	);
 }
 