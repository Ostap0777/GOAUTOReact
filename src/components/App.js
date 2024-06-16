import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Cars from './Cars';
import axios from 'axios';

export default function App() {
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
    <div className='wrapper'>
      <Header />
      <Cars items={cars} />
      <Footer />
    </div>
  );
}
