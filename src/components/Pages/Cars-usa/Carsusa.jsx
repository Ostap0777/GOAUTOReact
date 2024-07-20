import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import styles from '../../Pages/Cars-usa/Carsusa.module.css'

export default function Carsusa() {

	const [cars, setCars] = useState([])

	useEffect(() => {
	  const fetchData = async () => {
	   try	{
			const response = await axios.get('https://carshome-5719f-default-rtdb.firebaseio.com/carsUsa.json')
			console.log(response.data)
			setCars(response.data)
		} catch (error) {
			console.log("error")
		}
	  }
	  fetchData()
	}, [])


  return (
	<>
    <Header/>
	 <div className='wrapper'>
	 <section className={styles.main}>
        <div className={styles.cars__container}>
          <h2 className={styles.car__title}>Авто з США</h2>
          <div className={styles.cars__items}>
				{cars.map((car,id) => (
              <div className={styles.cars__item} key={id}>
                <img className={styles.car__image} src={car.photo} alt="Icon 1" />
                <h1 className={styles.car__name}>Марка: {car.name}</h1>
                <p className={styles.car__model}>Модель: {car.model}</p>
                <p className={styles.car__run}>Пробіг: {car.run} км</p>
                <p className={styles.car__transmission}>Коробка: {car.transmission}</p>
                <p className={styles.car__price}>Ціна: {car.price1} $</p>
                <a className={styles.car__detail}>Замовити</a>
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
