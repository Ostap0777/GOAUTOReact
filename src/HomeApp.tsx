import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes,} from 'react-router-dom';
import Error from './components/Pages/Error/Error'
import About from './components/Pages/About-us/Aboutus';
import Posts from './components/Pages/Posts'
import CarsId from './components/Pages/CarsId/CarsId'
import CarsAvailability from './components/Pages/CarsAvailability/CarsAvailability';
import Aboutus from './components/Pages/About-us/Aboutus';
import Carsusa from './components/Pages/Cars-usa/Carsusa';
import Login from './components/Pages/Login/Login';
import FavoriteCars from './components/Pages/FavoriteCars/FavoriteCars';




export default function App() {
  return (
    <BrowserRouter>
	 <Routes>
	     <Route path='/login' element={<Login />} />
        <Route path='/' element={<Posts/>} />
	     <Route path='cars/:id' element={<CarsId/>}/>
	     <Route path='/cars' element={<CarsAvailability/>}/>
	     <Route path='/about-us' element={<Aboutus/>}/>
   	  <Route path='/cars-usa' element={<Carsusa/>}/>
		  <Route path='/favoritecar' element={<FavoriteCars/>}/>
		  <Route path='*' element={<Error />} />
	 </Routes>
    </BrowserRouter>
  )
}
