import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from '../../Pages/CarsId/CarsId.module.scss'
import { Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Loader from '../../UI/Loader/Loader'


export default function CarsId() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchCar = async () => {
	try {
	  const response = await axios.get(`https://cars-cbca7-default-rtdb.firebaseio.com/cars/${id}.json`); 
	  setCar(response.data);
	  setLoading(false)
	  console.log(response)
	} catch (error) {
	  console.error('Помилка при завантаженні даних авто:', error);
	}
 };

  useEffect(() => {
     fetchCar();
  }, [id]);


  return (
	<>
	  <Header />
	  <div className='wrapper'>
		 <section className={styles.section}>
			<div className={styles.car__container}>
			  <div className={styles.go__home}>
				 <a className={styles.home__link} href="/cars">
					<img src="/icon/free-icon-back-3415823.png" className={styles.home__icon} alt="Назад" />Назад
				 </a>
			  </div>
			  {loading && <Loader />}
			  {!loading && (
				 <>
					<div className={styles.car__info__title}>
					  <h1 className={styles.car__info__name}>{car.name} {car.model}</h1>
					</div>
					<div className={styles.car__info__items}>
					  <Swiper
						 className={styles.swiper__items}
						 spaceBetween={100}
						 slidesPerView={1}
						 navigation
						 pagination={{ clickable: true }}
						 loop={true}
						 loopFillGroupWithBlank={true}
						 modules={[Navigation, Pagination]}
					  >
						 <SwiperSlide className={styles.swiper__item}>
							<img className={styles.car__info__image} src={car.photo} alt="Car" />
						 </SwiperSlide>
						 {car.details?.phototwo && (
							<SwiperSlide className={styles.swiper__item}>
							  <img className={styles.car__info__image} src={car.details.phototwo} alt="Car detail" />
							</SwiperSlide>
						 )}
						 {car.details?.photothree && (
							<SwiperSlide className={styles.swiper__item}>
							  <img className={styles.car__info__image} src={car.details.photothree} alt="Car detail" />
							</SwiperSlide>
						 )}
					  </Swiper>
					  <div className={styles.car__info__item}>
						 <div className={styles.car__info__info}>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Марка</div>
							  <div className={styles.car__name}>{car.name}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Модель:</div>
							  <div className={styles.car__model}>{car.model}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Ціна:</div>
							  <div className={styles.car__price}>{car.price} $</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Пробіг:</div>
							  <div className={styles.car__run}>{car.run} км</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Рік:</div>
							  <div className={styles.car__year}>{car.details.year}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Коробка:</div>
							  <div className={styles.car__transmission}>{car.transmission}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Колір:</div>
							  <div className={styles.car__color}>{car.details.color}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Двигун:</div>
							  <div className={styles.car__engine}>{car.details.engine}</div>
							</div>
							<div className={styles.car__info}>
							  <div className={styles.car__label}>Паливо:</div>
							  <div className={styles.car__fuel}>{car.details.fuel}</div>
							</div>
						 </div>
						 <div className={styles.car__opus}>
							<div className={styles.car__label}>Опис:</div>
							<div>{car.details.opus}</div>
							<div className={styles.car__phone}>
							  <Phone className={styles.phone__icon} />
							  <a className={styles.details__phone} href="tel:+380974300570">+380 97 430 05 70</a>
							</div>
						 </div>
					  </div>
					</div>
				 </>
			  )}
			</div>
		 </section>
	  </div>
	  <Footer />
	</>
 );
}