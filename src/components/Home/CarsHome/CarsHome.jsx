import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import styles from '../../../components/Home/CarsHome/CarsHome.module.scss'
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import 'swiper/swiper-bundle.css';
import PostService from '../../../API/PostService';


export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PostService.HomeCars();
        setCars(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <section className={styles.main}>
      <div className="cars__container">
        <h2 className={styles.car__title}>Авто на майданчику</h2>
        <Swiper
          className={styles.slider__items}
          spaceBetween={20}
          navigation
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}
			 breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slider__item}>
					<h2 className={styles.car__name}>{car.name}</h2>
                <img className={styles.car__image} src={car.photo} alt="" />
					 <div className={styles.car__opus}>Опис
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
