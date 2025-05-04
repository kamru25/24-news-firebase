import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'>Login With</h2>
      <div className='space-y-3'>
        <button className='btn btn-outline w-full btn-secondary'> <FcGoogle size={24} /> Login with Google</button>
        <br />
        <button className='btn btn-outline w-full btn-primary'> <FaGithub size={24} />
          Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;