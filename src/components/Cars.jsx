import React, { useState, useEffect } from 'react';
import axios from 'axios';
import icon1 from '../img/cars/mazdacx5.jpeg';

export default function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://carss-bb354-default-rtdb.asia-southeast1.firebasedatabase.app/cars.json');
        if (response.data) {
          setCars(Object.values(response.data));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="main">
      <div className="cars__container">
        <h2 className="car__title">Авто на майданчику</h2>
        <div className="cars__items">
          {cars.map((el, index) => (
            <div className="cars__item" key={index}>
              <img className="car__image" src={icon1} alt="Icon 1" />
              <h1 className="car__name">Марка: {el.name}</h1>
              <p className="car__model">Модель: {el.model}</p>
              <p className="car__run">Пробіг: {el.run} км</p>
              <p className="car__transmission">Коробка: {el.transmission}</p>
              <p className="car__price">Ціна: {el.price} $</p>
              <a className="car__detail" href="#">Детальніше</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
