import React from 'react'
import { Link } from 'react-router-dom'

const Carrier = () => {
    return (
        <div className='w-full flex-col md:flex-row flex mt-10'>
            <div className='w-full lg:w-[60%] p-5 md:p-20 leading-snug'>
                <h1 className='text-4xl md:text-7xl font-bold tracking-wide leading-relaxed'>ARE YOU A</h1>
                <h1 className='text-3xl md:text-6xl font-bold text-[#FF4800] tracking-normal '> FRESHER/EXPERIENCED?</h1>
                <p className='text-lg md:text-xl mt-8 mb-8'>
                Let's start your career together at Antrorse, we will sharpen
                    your technical skills to communication skills.

                </p>
                <Link className='px-8 py-3 bg-[#FF4800] text-white rounded-full' to={'/coming'}>APPLY NOW</Link>
            </div>

            <div className='w-full md:hidden lg:block md:w-[40%]'>
                <img className='w-[80vh]' src="https://img.freepik.com/free-vector/starting-career-concept-illustration_114360-20563.jpg?w=996&t=st=1711181712~exp=1711182312~hmac=46f2113c2c289b4f98afe205f0152db6e2d8f5f7d40cacf7c039dfe679a65fbd" alt="" />
            </div>

        </div>
    )
}

export default Carrier