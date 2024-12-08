import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Great_Vibes } from 'next/font/google';
import Hero from './Hero';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });
const InterFont = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='w-full h-[950px]  bg-[#0D0D0DF2] relative'>
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image 
            src="/home-bg.png" 
            alt="Home Background" 
            fill 
            priority 
            style={{ objectFit: 'cover', opacity: 0.5, zIndex: -1 }}
          />
        </div>
        
        {/* Hero Section */}
        <div className='flex gap-[20px] md:mt-0 mt-[40px] md:gap-[80px]'>
          <div className='flex flex-col md:ml-0 ml-9'>
            <Image src='/Line 11.png' alt='linepic' width={1} height={1} className='md:ml-[123px] ml-[7px] md:mt-[70px] text-[#FFFFFF]' />
            <div className='flex flex-col md:w-[25.28px] h-[80px] md:my-0 my-11 md:mt-[50px] gap-6'>
              <FaFacebookF className='md:ml-[113px] text-[#FFFFFF]' />
              <FaTwitter className='md:ml-[113px] text-[#FF9F0D]' />
              <FaPinterestP className='md:ml-[113px] text-[#FFFFFF]' />
            </div>
            <Image src='/Line 11.png' alt='linepic' width={1} height={1} className='md:ml-[123px] ml-[7px] md:mt-[50px] text-[#FFFFFF]' />
          </div>
          <div className='flex flex-col md:gap-[180px] md:flex-row'>
            <div className=' md:mt-[160px] flex flex-col md:w-[472px] md:h-[356px]'>
              <p className={`${VibeFont.className} text-[32px] text-[#FF9F0D]`}>Its Quick & Amusing!</p>
              <h1 className='font-bold text-[60px] leading-[68px] text-[#FFFFFF]'>
                <span className='text-orange-400'>Th</span>e Art of speed food Quality
              </h1>
              <p className='md:w-[418px] md:h-[48px] leading-[24px] text-base text-[#FFFFFF] md:mt-5 md:my-0 my-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
              </p>
              <h5 className='md:w-[165px] w-[140px] rounded-[30px] md:h-[80px] bg-[#FF9F0D] flex justify-center items-center md:py-3 h-[50px] md:mt-[20px]'>
                <p className={`${InterFont.className} text-[#E0DFDF] font-normal text-[16px] leading-[24px]`}>
                  See Menu
                </p>
              </h5>
            </div>
            <div className='text-white md:h-[670px] md:mt-[110px] '>
              <Image src='/image.png' alt='heropic' width={624} height={624} />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Content Below Header */}
     <Hero/>
    </div>
  );
};

export default Header;
