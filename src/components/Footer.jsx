import React from 'react'
import icon1 from '../img/icon/iconGoAuto.png'


export default function Footer() {
  return (
	 <footer className='footer'>
	   <div className='footer__container'>
	     <img className='footer__image' src={icon1}  alt='Icon 1' />
		  <div className='footer__social social'>
			<a href="#" className='social__link social__facebook'>Go Auto Lviv</a>
			<a href="#" className='social__link social__instagram'>goautolviv</a>
			<a href="#" className='social__link social__tiktok'>goautolviv</a>
			<a href="#" className='social__link social__phone'> 097 430 05 70</a>
			<a href="#" className='social__link social__telegram'>t.me/goautolviv</a>
		  </div>
	  </div>
	 </footer>
  )
}
