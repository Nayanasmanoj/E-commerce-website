import React from 'react';
import { logoDark } from '../assets';
import github from '../assets/github.png';
import youtube from '../assets/youtube.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import visa from '../assets/visa.png';
import paytm from '../assets/paytm.png';

const Footer = () => {
  return (
    <div className="bg-black p-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="max-w-screen-xl mx-auto flex flex-col items-left">
          <img src={logoDark} alt="logoDark" style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
          <div className="flex gap-4">
            <img src={visa} alt="visa" style={{ width: '30px', height: 'auto', marginBottom: '20px' }} />
            <img src={paytm} alt="paytm" style={{ width: '30px', height: 'auto', marginBottom: '20px' }} />
          </div>
          <div className="flex gap-4">
            <img className="hover:text-white duration-300 cursor-pointer" src={github} alt="github" style={{ width: '20px', height: 'auto' }} />
            <img className="hover:text-white duration-300 cursor-pointer" src={youtube} alt="youtube" style={{ width: '20px', height: 'auto' }} />
            <img className="hover:text-white duration-300 cursor-pointer" src={facebook} alt="facebook" style={{ width: '20px', height: 'auto' }} />
            <img className="hover:text-white duration-300 cursor-pointer" src={twitter} alt="twitter" style={{ width: '20px', height: 'auto' }} />
            <img className="hover:text-white duration-300 cursor-pointer" src={instagram} alt="instagram" style={{ width: '20px', height: 'auto' }} />
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">locate us</h2>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}>123 Main Street, Cityville, State, 12345"</p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}> Phone Number: (555) 555-5555</p>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}>Email: john.doe@example.com</p>
        </div>
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">profile</h2>
            <p className="hover:underline hover:text-white duration-300 cursor-pointer" style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}>my account</p>
            <p className="hover:underline hover:text-white duration-300 cursor-pointer" style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}>order tracking</p>
            <p className="hover:underline hover:text-white duration-300 cursor-pointer" style={{ fontSize: '1rem', fontStyle: 'italic', color: 'white', marginBottom: '0.5rem' }}>help & support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

