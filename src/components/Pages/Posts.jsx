import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cars from '../Home/CarsHome/CarsHome';
import axios from 'axios';
import MainAdvantages from '../Home/MainComponents/MainAdvantages';
import MainFoto from '../Home/MainFoto/MainFoto';
import MainServices from '../Home/MainComponents/MainServices';
import CarsUsaHome from '../Home/CarsHome/CarsUsaHome';
import Location from '../Home/Location/location';


export default function posts() {
  return (

	<div className='wrapper'>
	<Header />
	<MainFoto />
	<MainAdvantages />
	<MainServices />
	<Cars />
	<CarsUsaHome/>
	<Location/>
	<Footer />
	</div>
  )
}
