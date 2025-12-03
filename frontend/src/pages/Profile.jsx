import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import animationData1 from '../assets/Pfp.json';

const Profile = () => {
  const lottieRef = useRef();

  const handleMouseEnter = () => {
    lottieRef.current.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current.stop();
    lottieRef.current.goToAndStop(0, true);
  };

  return (
    <div
      style={{
        backgroundColor: '#eeeeee',
        padding: '20px',
        width: '220px',
        borderRadius: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#eeeeee',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData1}
          loop={true}
          autoplay={false}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default Profile;