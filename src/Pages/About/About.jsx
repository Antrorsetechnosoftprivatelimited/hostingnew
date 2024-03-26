import React from "react";
import shape1 from "../../assets/10stack.svg"
import { LuGoal } from "react-icons/lu";
import { IoTelescope } from "react-icons/io5";

const About = () => {
    return (
        
            <section className="overflow-hidden mt-4  pb-8 lg:pt-[120px] lg:pb-[90px] bg-white  about  bg-no-repeat bg-center bg-cover">

                <h1 className='text-2xl sm:text-5xl font-bold mb-10 ml-2 sm:ml-10 lg:ml-20'>About us</h1>

                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-5 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="https://img.freepik.com/free-photo/full-shot-people-chatting-work_23-2149097915.jpg?t=st=1711176038~exp=1711179638~hmac=e15530bb35030774ab969e4c5e09609638d41f9270dc703964b6323034450e3f&w=740"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img
                                            src="https://images.pexels.com/photos/7652039/pexels-photo-7652039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img
                                            src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <img src={shape1} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mb-[11.5rem] px-4 lg:w-1/2 xl:w-5/12 ">
                            {/* <div className=" mb-10 mt-10 lg:mb-20 pl-4 sm:pl-0">
                                <h1 className="text-5xl font-bold text-[#777777]">Hello from <span className="text-[#FF4800]">Antrorse</span></h1>
                            </div> */}
                           

                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">

                                <p className="text-gray-800 text-2xl font-semibold sm:text-4xl flex items-center gap-2">
                                    <LuGoal />Our mission
                                </p>
                                <p className="mt-3 text-gray-600">
                                    At Antrorse, our mission is to simplify the lives of our users by offering a comprehensive platform where they can find Everything they need in one place. We strive to provide a seamless and user-friendly experience, ensuring that our customers can easily access a wide range of products and services with just a few clicks. Our dedicated team is committed to continuously improving and expanding our offerings to meet the evolving needs of our users. Join us on our journey to revolutionize the way people shop and discover the convenience of Antrorse.
                                </p>
                                <a  className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>

                            <div className="max-w-xl  px-4 space-y-3 mt-6 sm:px-0 md:mt-16 lg:max-w-2xl">

                                <p className="text-gray-800 text-2xl font-semibold sm:text-4xl flex items-center gap-2">
                                    <IoTelescope /> Our vision
                                </p>
                                <p className="mt-3 text-gray-600">
                                    To become the leading one-stop website for all needs, providing convenience and efficiency to users worldwide.
                                </p>
                                <a  className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="mt-10 lg:mt-10 lg:max-w-2xl  ">
                                <span className="block mb-4 text-3xl font-bold pl-4 sm:pl-0">
                                    Why Choose Us
                                </span>

                                <p className="mb-5 text-base px-4 sm:px-0 ">
                                "Innovative Out Of The Box Solutions" has always been our strength and one the reason behind our success. Started our business as a Manpower Consultancy firm in the year 2005 with the trade name "Right Vision Consultancy & Placements" and after having glorious 6 years, We desided to expand our business and came up with Brand "ANTRORSE" in the year 2011.
                                </p>


                            </div>



                        </div>
                    </div>
                </div>
            </section>
        
    );
};

export default About;
