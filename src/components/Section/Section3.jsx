import React, { Fragment } from 'react';

export default function Section3() {
    return (
        <>
            <section className='section-3 relative'>
                <img src="/img/Rectangle 12.png" alt="" />
                <div className='main'>
                    <div className='posters grid grid-cols-10 text-center absolute'>
                        <div className='dumbElement lg:col-span-3 md:col-span-3'>

                        </div>
                        <div className='leftPoster'>
                            <div className='innerLeftPoster'>
                                <div className="leftPoster-content text-2xl">
                                    <span className='text-3xl font-medium text-[#4B2A63]'>Make your dream interior in</span>
                                    <span className='text-4xl'>3 easy steps</span>
                                    <span className='font-bold text-[#4B2A63]'>Explore</span>
                                    <span className='text-sm'>
                                        Explore more than just modular design
                                        ideas with our experts.
                                    </span>
                                    <span className='font-bold text-[#4B2A63]'>Design</span>
                                    <span className='text-sm'>
                                        Complete the designs with painting, flooring
                                        and other decor solutions
                                    </span>
                                    <span className='font-bold text-[#4B2A63]'>Move-in</span>
                                    <span className='text-sm'>
                                        Move in with ease, with our hassle-free civil work
                                        and installation services.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='rightPoster lg:col-span-7 md:col-span-7 col-span-10'>
                            <img src="/img/image 16.png" alt="" />
                        </div>
                    </div>
                    <div className='bottomPoster absolute top-7/10 w-1/1'>
                        <h1 className='text-center font-medium text-3xl'>What we do?</h1>
                        <div className='innerBottomPoster container max-w-screen-xl mx-auto grid grid-cols-12 gap-x-10 mt-10 px-5 text-center'>
                            <div className='lg:col-span-3 md:col-span-3 col-span-6'>
                                <img src="/img/image 3.png" alt="" />
                                <span className='text-1xl font-[700] block mt-5 mb-5 text-[#4B2A63]'>Modular Kitchen</span>
                            </div>
                            <div className='lg:col-span-3 md:col-span-3 col-span-6'>
                                <img src="/img/image 4.png" alt="" />
                                <span className='text-1xl font-[700] block mt-5 mb-5 text-[#4B2A63]'>Bedroom</span>
                            </div>
                            <div className='lg:col-span-3 md:col-span-3 col-span-6'>
                                <img src="/img/image 8.png" alt="" />
                                <span className='text-1xl font-[700] block mt-5 mb-5 text-[#4B2A63]'>Living room</span>
                            </div>
                            <div className='lg:col-span-3 md:col-span-3 col-span-6'>
                                <img src="/img/image 9.png" alt="" />
                                <span className='text-1xl font-[700] block mt-5 mb-5 text-[#4B2A63]'>Home office</span>
                            </div>
                        </div>
                        <div className='text-center lg:w-215 mx-auto px-5'>
                            <p className='col-span-1'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
