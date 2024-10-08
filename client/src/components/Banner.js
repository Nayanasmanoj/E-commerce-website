import React, { useState } from 'react';
import {BiChevronRight,BiChevronLeft} from "react-icons/bi"

const Banner = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    const data= [
        "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
        "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
        "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Ly9zlsGxL._SX1500_.jpg",
        "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Ly9zlsGxL._SX1500_.jpg",
    ];
    const prevSlide=()=>{
        setCurrentSlide(currentSlide==0 ? 3: (prev)=>prev-1)
    };
    const nextSlide=()=>{
        setCurrentSlide(currentSlide==3 ? 0: (prev)=>prev+1)
    };
    console.log(currentSlide)
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-650px relative'>
            <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-tranform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="ImgOne" loading='priority'/>
                <img className='w-screen h-full object-cover' src={data[2]} alt="ImgTwo" />
                <img className='w-screen h-full object-cover' src={data[1]} alt="ImgThree" />
                <img className='w-screen h-full object-cover' src={data[3]} alt="ImgFour" />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <BiChevronLeft />
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <BiChevronRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
