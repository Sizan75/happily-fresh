import React from 'react';
import { Link } from 'react-router-dom';
import {FaLinkedin, FaFacebookF,FaGithub } from "react-icons/fa";
import logo from '../../../assets/logo1.png'
const Footer = () => {
    return (
       
            <footer className="footer items-center p-4  text-white bg-black text-black-content relative  bottom-0">
  <div className="items-center grid-flow-col">
    <img src={logo} className='w-8 h-8'  alt="" />
    <p>Copyright © 2022 - All right reserved MD.SAKI</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href='https://www.facebook.com/sakiuz.zaman.1/' target='_blank' rel='noreferrer'><FaFacebookF className='w-6 h-6'></FaFacebookF></a> 
    <a href='https://github.com/Sizan75' target='_blank' rel='noreferrer' ><FaGithub className='w-6 h-6'></FaGithub></a>
    <a href='https://www.linkedin.com/in/md-saki-uz-zaman/' target='_blank' rel='noreferrer'><FaLinkedin className='w-6 h-6'></FaLinkedin></a>
  </div>
</footer>
        
    );
};

export default Footer;