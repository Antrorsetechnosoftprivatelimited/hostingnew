import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/apy-job.png';
import bg2 from '../../assets/bg_section.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import icon2 from '../../assets/hosting.gif';
import icon3 from '../../assets/marketplace.gif';
import icon4 from '../../assets/technistuteicon.png';
import img1 from '../../assets/product1.jpg'
import img2 from '../../assets/product2.jpg'

const Product = () => {
    return (
        <div className='bg-[#F0EBFF] bg-cover bg-center bg-no-repeat'>
            <div style={{ backgroundImage: `url(${bg})` }} className="header bg-no-repeat bg-cover bg-center pt-10 pb-16">
                <div className='flex py-5  lg:px-10'>
                    <div className='w-full lg:w-1/2 p-4 lg:p-16 justify-center flex flex-col items-center'>
                        <h1 className='text-4xl sm:text-6xl font-bold text-center'>Explore our extensive range of products.
</h1>
                        <p className='mt-5 text-lg sm:text-xl p-5 text-center'>From basics to specialized solutions, our diverse range of products guarantees that you'll find exactly what you need.</p>
                        <button className='flex gap-2 items-center justify-center text-lg py-3 px-10 bg-[#FF4800] text-white rounded-full hover:bg-transparent hover:text-[#FF4800] hover:border-2 border-[#FF4800] font-semibold'>Visit <MdKeyboardDoubleArrowRight /></button>
                    </div>

                    <div className="hidden w-1/2 lg:grid grid-cols-5 grid-rows-8 gap-4">
                        <div className="col-span-3 row-span-4 rounded-xl overflow-hidden shadow-lg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="col-span-3 row-span-4 col-start-3 row-start-5 rounded-xl overflow-hidden shadow-lg">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${bg2})` }} className='bg-cover bg-no-repeat bg-center pb-20'>
                <h1 className='text-3xl sm:text-6xl font-bold py-8 px-6 sm:px-14'>Our Products</h1>
                <div className="grid grid-col-1 lg:grid-cols-8 lg:grid-rows-8 lg:gap-6 sm:p-20 p-5">
                    <div className="lg:col-span-4 lg:row-span-4 lg:col-start-3 bg-[#8A5CFF] h-[240px] sm:h-[360px] rounded-3xl shadow-md flex items-center justify-center flex-col hover:scale-105 transition ease-linear duration-200 cursor-pointer leading-none ">
                        <Link to={"/coming"} className="w-full h-full flex justify-center items-center flex-col">
                            <img className='w-20 sm:w-32' src={icon3} alt="" />
                            <h1 className='text-white font-[600] text-[2rem] sm:text-[3.5rem] font-["Poppins"] z-20'>Antrorse</h1>
                            <h1 className='text-white font-[600] text-[2rem] sm:text-[3.5rem] font-["Poppins"] z-20'>Marketplace</h1>

                            <p className='mt-5 mb-3 sm:mb-8 text-white text-center text-base sm:text-lg font-bold'> Browse, shop, and enjoy in our diverse marketplace.</p>
                        </Link>
                    </div>
                    <div className="lg:col-span-4 lg:row-span-4 lg:row-start-5 bg-[#FF3489]  h-[240px] sm:h-[360px] rounded-3xl shadow-md flex items-center justify-center flex-col relative group hover:scale-105 transition ease-linear duration-200 cursor-pointer leading-[1.3] mt-8 lg:mt-0">
                        <Link className='flex flex-col justify-center items-center leading-none' to={"https://hosting.antrorse.com/"}>
                            <div className='w-full flex justify-center'>
                                <img className='w-12 sm:w-32' src={icon2} alt="" />
                            </div>
                            <h1 className='text-white font-[600] text-[2rem] sm:text-[3.5rem] font-["Poppins"] z-20'>Antrorse</h1>
                            <h1 className='text-white font-[600] text-[2rem] sm:text-[3.5rem] font-["Poppins"] z-20'>Hosting</h1>

                            <p className='mt-2 mb-3 sm:mb-8 px-3 text-center text-white sm:text-lg text-base font-bold'> Find Reliable Hosting Solutions Designed to Meet Your Every Requirement</p>
                        </Link>
                    </div>
                    <div className="lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-5 bg-[#08BE5A]  h-[240px] sm:h-[360px] rounded-3xl shadow-md flex items-center justify-center flex-col relative group hover:scale-105 transition ease-linear duration-200 cursor-pointer mt-8 lg:mt-0">
                       <Link className='flex group-odd: flex-col justify-center items-center' to={"/coming"}>
                       <div>
                            <img className='w-36 sm:w-60 ' src={icon4} alt="" />
                        </div>
                        <h1 className='text-white font-[600] text-[2rem] sm:text-[3.5rem] font-["Poppins"] z-20'>Technistute</h1>
                        <h1 className='text-white font-[600] text-[1rem] font-["Poppins"] z-20'>School Management System</h1>
                        <p className='sm:mt-5 mt-2 text-white text-base sm:text-lg font-bold p-3 text-center'>Streamline your school management tasks with our user-friendly system</p>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
