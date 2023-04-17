import React, { useContext } from 'react';
import Lottie from "lottie-react";
import welcome from "../assets/welcome.json";

const Home = () => {

  return (
    <div className='max-w h-[90vh] flex justify-center items-center'>
      <Lottie className='w-1/2' animationData={welcome} loop={true} />
    </div>
  );
};

export default Home;
