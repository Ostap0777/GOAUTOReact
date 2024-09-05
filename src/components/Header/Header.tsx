import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/header.module.scss'



export default function Header() {
  return (
    <header className={styles.header} >
      <div className={styles.header__container}>
			<Link to="/">
          <img className={styles.header__image} src="/icon/iconGoAuto.png" alt='Icon 1' />
			 </Link>
			 <div className={styles.header__icon__menu}>
		  	   <Link className={styles.header__aboutus} to="/about-us">Про нас</Link>
				<Link className={styles.header__availability} to="/cars">Авто в наявності</Link>
				<Link className={styles.header__usa} to="/cars-usa">Авто з Сша</Link>
				<Link to="/favoriteCar">
			    	<img className={styles.header__favorite} src="/icon/icons8-сердце-50.png" alt="icon" />
				</Link>
				<Link to="/login">
               <img className={styles.header__login}  src="/icon/Vector (6).svg" alt='Icon 2' />
				</Link>
			 </div>
      </div>

    </header>
  );
}
