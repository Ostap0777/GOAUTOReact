import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../Header/Header';
import styles from '../../Pages/CarsAvailability/carsvailability.module.css'
import Footer from '../../Footer/Footer';

export default function CarsAvailability() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cars-cbca7-default-rtdb.firebaseio.com/cars.json');
		 
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header /> 
		<div className='wrapper'>
      <section className={styles.main}>
        <div className={styles.cars__container}>
          <h2 className={styles.car__title}>Авто на майданчику</h2>
          <div className={styles.cars__items}>
            {cars.map((car, index) => (
              <div className={styles.cars__item} key={index}>
                <img className={styles.car__image} src={car.photo } alt="Icon 1" />
                <h1 className={styles.car__name}>Марка: {car.name}</h1>
                <p className={styles.car__model}>Модель: {car.model}</p>
                <p className={styles.car__run}>Пробіг: {car.run} км</p>
                <p className={styles.car__transmission}>Коробка: {car.transmission}</p>
                <p className={styles.car__price}>Ціна: {car.price} $</p>
                <a className={styles.car__detail} href={`/cars/${index}`}>Детальніше</a>
              </div>
            ))}
          </div>
        </div>
      </section>
		</div>
		<Footer/>
    </>
  );
}


