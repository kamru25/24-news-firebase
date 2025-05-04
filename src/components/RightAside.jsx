import React from 'react';
import SocialLogin from './homelayout/SocialLogin';
import FindUs from './homelayout/FindUs';
import Qzone from './homelayout/Qzone';

const RightAside = () => {
  return (
    <div className='space-y-8'>
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;