import React from 'react';
import icon1 from '../img/icon/iconGoAuto.png';
import icon2 from '../img/icon/Vector (6).svg'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__icon' >
          <img className='header__image' src={icon1} alt='Icon 1' />
        </div>
        <div className='header__icon icon__login'>
          <img className='header__image header-image__login' src={icon2} alt='Icon 2' />
        </div>
      </div>
    </header>
  );
}
