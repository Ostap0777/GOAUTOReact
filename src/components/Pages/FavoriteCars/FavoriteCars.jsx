import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from '../FavoriteCars/favorileCars.module.scss';
import PostService from '../../../API/PostService';
import { ArchiveX } from 'lucide-react';
import Loader from '../../UI/Loader/Loader';
import FavoriteText from '../../UI/FavoriteText/FavoriteText';

export default function FavoriteCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await PostService.FavoriteCars();
      const CarsFavorite = Object.values(response);
      setCars(CarsFavorite);
      setLoading(false);
    } catch (error) {
      console.log('Error');
      setError(true);
      setLoading(false);
    }
  };

  const deleteFromFavorite = async (car) => {
    try {
      await PostService.DeleteFavorite(car);
      setCars((cars) => cars.filter((item) => item.id !== car.id));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="section__container">
        <div className='wrapper'>
          <h1 className={styles.favorite__title}>Вибрані Авто</h1>
          {loading && <Loader />}
          {error && <FavoriteText />}
          {!loading && !error && (
            <div className={styles.items__cars}>
              {cars.map((car, index) => (
                <div className={styles.item__car} key={index}>
                  <div className={styles.car__content__one}>
                    <p className={styles.car__name}>{car.name} {car.model}</p>
                    <img className={styles.car__image} src={car.photo} alt="Car" />
                  </div>
                  <div className={styles.car__content__two}>
                    <p className={styles.car__price}>{car.price} $</p>
                    <a className={styles.car__phone} href="tel:0974300570">+38 097 430 05 70</a>
                    <ArchiveX className={styles.car__delete} onClick={() => deleteFromFavorite(car)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
