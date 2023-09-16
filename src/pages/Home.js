import React, { useState } from 'react';
import Card from '../components/CardForm/Card';
import Hero from '../components/HeroSection/Hero';
import FrontCard from '../components/FrontCard/FrontCard';
import BackCard from '../components/BackCard/BackCard';

const Home = () => {
  const [value, setvalue] = useState([
    'JANE APPLESEED',
    '0000 0000 0000 0000',
    '00',
    '00',
    '000',
  ]);
  function handleChange(data) {
    setvalue(data);
  }
  return (
    <>
      <Card onChange={handleChange} />
      <Hero />
      <FrontCard
        name={value[0]}
        cardNumber={value[1]}
        month={value[2]}
        year={value[3]}
      />
      <BackCard cvc={value[4]} />
    </>
  );
};

export default Home;
