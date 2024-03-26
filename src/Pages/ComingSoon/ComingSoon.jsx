import React from 'react'
import bg from '../../assets/bg.webp'

const ComingSoon = () => {
    return (

        <div style={{ backgroundImage: `url(${bg})` }} class=" h-screen  flex flex-col items-center justify-center  bg-no-repeat bg-cover bg-center">
            <h1 class="text-4xl sm:text-6xl mt-24 lg:text-[140px] text-white font-extrabold mb-8 ">
                Coming Soon
            </h1>
            <div class="text-[#1e1d1d] sm:w-1/2 sm:text-xl lg:text-3xl font-semibold mb-8 mt-10 sm:px-0 px-5 text-center ">
            <p >
                We're working hard to bring you something amazing. Stay tuned!
            </p>
            </div>
           
        </div>
    )
}

export default ComingSoon