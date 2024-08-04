import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Header from '../../Header/Header';
import styles from '../../Pages/CarsAvailability/carsvailability.module.scss'
import Footer from '../../Footer/Footer';
import PostService from '../../../API/PostService';
import Loader from '../../UI/Loader/Loader';
import Error from '../Error/Error';

export default function CarsAvailability() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
	try {
	  const response = await PostService.CarAvailabiliti();
	  setCars(response);
	  setLoading(false)
	} catch (error) {
	  console.error('Error fetching data:', error);

	}
 }, []);

 const handleAddFavorite = async (car) => {
	try {
	  const response = await PostService.AddFavorite(car);
	 
	} catch (error) {
	  console.error('Error adding car to favorites:', error);
	  setLoading(true)
	}
 };

 useEffect(() => {
	fetchData();
 }, [fetchData]);

  return (
    <>
      <Header /> 
		<div className='wrapper'>
      <section className={styles.main}>
        <div className={styles.cars__container}>
          <h2 className={styles.car__title}>Авто на майданчику</h2>
			 {loading && <Loader/>}
			 {!loading && (
          <div className={styles.cars__items}>
            {cars.map((car, index) => (
              <div className={styles.cars__item} key={index}>
                <img className={styles.car__image} src={car.photo } alt="Icon 1" />
                <h1 className={styles.car__name}>Марка: {car.name}</h1>
                <p className={styles.car__model}>Модель: {car.model}</p>
                <p className={styles.car__run}>Пробіг: {car.run} км</p>
                <p className={styles.car__transmission}>Коробка: {car.transmission}</p>
                <p className={styles.car__price}>Ціна: {car.price} $</p>
					 <div className={styles.car__options}>
						<div href="" onClick={() => handleAddFavorite(car)}>
							<img className={styles.car__add__favorite} src="/icon/free-icon-серцеблек-1077035.png" alt="" />
						</div>
                   <a className={styles.car__detail} href={`/cars/${index}`}>Детальніше</a>
					 </div>
              </div>
            ))}
          </div>
			 )}
        </div>
      </section>
		</div>
		<Footer/>
    </>
  );
}


