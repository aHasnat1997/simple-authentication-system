import React from 'react';
import Lottie from "lottie-react";
import dance from "../assets/dance-monkey.json";

const Dance = () => {
  return (
    <div className='max-w h-[90vh] flex justify-center items-center'>
      <Lottie className='w-1/2' animationData={dance} loop={true} />
    </div>
  );
};

export default Dance;
