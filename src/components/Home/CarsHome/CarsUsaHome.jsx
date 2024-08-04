import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import styles from '../../Home/CarsHome/CarsUsa.module.scss'
import Button from '../../UI/Button/Button';
import 'swiper/swiper-bundle.css';
import PostService from '../../../API/PostService';

export default function CarsUsaHome() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PostService.UsaHome()
        setCars(response); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
	<section className={styles.main}>
	<div className="cars__container">
	  <h2 className={styles.car__title}>Авто з США</h2>
	  <Swiper
		 className={styles.slider__items}
		 spaceBetween={50}
		 navigation
		 loop={true}
		 loopFillGroupWithBlank={true}
		 modules={[Navigation]}
		 breakpoints={{
			640: {
			  slidesPerView: 1,
			},
			750: {
			  slidesPerView: 2,
			},
		 }}
	  >
		 {cars.map((car, index) => (
			<SwiperSlide key={index}>
			  <div className={styles.slider__item}>
				 <img className={styles.car__image} src={car.photo} alt="" />
				 <div className={styles.car__header}>
					<p className={styles.car__name}>{car.name} {car.model}</p>
					<p className={styles.car__engine}>Двигун: {car.engine} {car.fuel}</p>
					<p className={styles.car__run}>Пробіг: {car.run} км</p>
				 </div>
				 <div className={styles.car__footer}>
				 <p className={styles.car__price}>Ціна GO AUTO: {car.price1} $</p>
				 <p className={styles.car__price}>Ціна на ринку: {car.price2} $</p>
				 <p className={styles.car__price}>Економія: {car.price3} $</p>
				 </div>
			  </div>
			</SwiperSlide>
		 ))}
	  </Swiper>
		<Button className={styles.car__button}>
			  <Link to='/cars-usa'>Перегнути більше</Link>
		</Button>
	</div>
 </section>
  );
}
