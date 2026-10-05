import React from 'react'
const Home = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center relative'>
            <div className='text-center z-10 px-4'>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-red-800 bg-clip-text text-transparent leading-right'>
                    Hi, I'm Shimirwa Remy  Patrick
                </h1>
                <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                    I’m a beginner web developer learning both frontend and backend development. I enjoy building websites, learning new technologies, and improving my skills as I work toward becoming a full-stack developer.
                </p>
                <div className='flex justify-center spac-x-4'>
                    <a href='#projects' className='bg-blue-500 text-white py-3 px-6 rounded  font-medium  transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'> View Projects</a>
                    <a href="#contacts"
                        className='border border-blue-500/20 bg-black-500/50 text-black-500  py-3 mx-3 px-6 rounded font-medium transition-all duration-200    hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home