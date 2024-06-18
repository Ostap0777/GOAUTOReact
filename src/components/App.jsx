import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cars from './Cars';
import axios from 'axios';
import MainAdvantages from './MainAdvantages';
import MainFoto from './MainFoto';
import MainServices from './MainServices';


export default function App() {
  return (
    <div className='wrapper'>
      <Header />
		<MainFoto />
		<MainAdvantages />
		<MainServices/>
      <Cars />
      <Footer />
    </div>
  );
}
