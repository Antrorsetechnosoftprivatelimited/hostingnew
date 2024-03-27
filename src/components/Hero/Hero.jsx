import React from 'react';
import logo3 from '../../assets/antrorse_corporation_zerobg.png';
import logo2 from '../../assets/Antrorse Impex Logo.png';
import logo1 from '../../assets/Antrorse Foundation.png';
import logo4 from '../../assets/antrorse_technosoft_zerobg.jpeg.png';
import logo5 from '../../assets/Antrorse_infra.png';
import bg from '../../assets/Bg.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import brand from '../../assets/11.jpeg';


const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <section className='hero w-full sm:h-full lg:h-screen bg-no-repeat bg-cover bg-center pt-28' >
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 sm:px-4 lg:px-10 gap-3'>
        <div className='backdrop-blur-[10px] flex sm:bg-[#fcf5f5] h-[300px] sm:h-[500px] col-span-2 rounded-xl shadow-xl pb-5 sm:pb-0'>
          <div className='w-full sm:w-[40%] flex flex-col items-center justify-center sm:p-6 sm:pl-14 pl-5 '>
            <h1 className='text-6xl font-bold leading-snug '>Create experience with us.
            </h1>
            {/* <p className=' pt-7 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsam et praesentium aperiam harum id!</p> */}
          </div>
          <div className='hidden h-[90%] sm:h-full sm:w-[[9.5rem]%] w-[60%] sm:flex items-center justify-center overflow-hidden '>
            <div className="grid grid-cols-4 grid-rows-6 gap-x-16 place-content-center ">
              <div className="col-span-2  row-span-2 flex items-center justify-center rounded-full bg-[#e8e8ee] w-[200px] h-[200px] ">
                <img className='w-[9.5rem] self-center' src={logo1} alt="" />
              </div>
              <div className="col-span-2 row-span-2 col-start-3 flex items-center justify-center rounded-full bg-[#e8e8ee] w-[200px] h-[200px] ">
                <img className='w-[11rem] self-center' src={logo2} alt="" />
              </div>
              <div className="col-span-2 row-span-2 col-start-2 row-start-3 w-[200px] h-[200px] flex items-center justify-center rounded-full bg-[#d7d7d7]">
                <img className='w-[11rem] self-center' src={logo3} alt="" />
              </div>
              <div className="col-span-2 row-span-2 row-start-5 flex items-center justify-center rounded-full bg-[#e8e8ee] w-[200px] h-[200px]">
                <img className='w-[11rem] self-center' src={logo4} alt="" />
              </div>
              <div className="col-span-2 row-span-2 col-start-3 row-start-5 flex items-center justify-center rounded-full bg-[#e8e8ee] w-[200px] h-[200px]">
                <img className='w-[11rem] self-center' src={logo5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block h-[500px] rounded-xl shadow-xl overflow-hidden self-center'>
          <Slider {...settings}>
            <div className='relative'>
              <img className='z-10 w-full h-auto' src={bg} alt="" />
              <div className='absolute bottom-24 left-[36%] z-20 flex justify-center flex-col gap-3'>
                <h3 className='text-2xl font-bold text-white'>Marketplace</h3>

                <Link to={"/coming"} className='py-2 font-bold text-center bg-[#FF4800] hover:bg-[#ff6325] rounded-full text-white cursor-pointer'>Visit</Link>

              </div>
            </div>
            <div>
              <img className='w-full h-auto' src={brand} alt="" />
            </div>
          </Slider>
        </div>
      </div>

      
    </section>

  );
}

export default Hero;
