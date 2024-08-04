import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import axios from 'axios';
import styles from '../../Pages/Cars-usa/Carsusa.module.scss';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/MyModal/myModal'
import PostService from '../../../API/PostService';
import Loader from '../../UI/Loader/Loader'

export default function Carsusa() {

	const [cars, setCars] = useState([])
	const [modalActive, setModalActive] = useState(false);
	const [loading, setLoader] = useState(true)

	useEffect(() => {
	  const fetchData = async () => {
	   try	{
			const response = await PostService.CarsUsa()
			setCars(response);
			setLoader(false)
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
			 {loading && <Loader/>}
			 {!loading && (
          <div className={styles.cars__items}>
				{cars.map((car,id) => (
              <div className={styles.cars__item} key={id}>
                <img className={styles.car__image} src={car.photo} alt="Icon 1" />
                <h1 className={styles.car__name}>Марка: {car.name}</h1>
                <p className={styles.car__model}>Модель: {car.model}</p>
					 <p className={styles.car__engine}>Двигун:{car.engine}</p>
                <p className={styles.car__run}>Пробіг: {car.run} км</p>
                <p className={styles.car__transmission}>Коробка: {car.transmission}</p>
                <p className={styles.car__price}>Ціна: {car.price} $</p>
					 <button className={styles.car__button} onClick={() => setModalActive(true)}>Замовити</button>
              </div>
         ))}
          </div>
			 )}
        </div>
		  <Modal active={modalActive}  setActive={setModalActive}/>
      </section>
		</div>
		<Footer/>
		</>
  );
}
