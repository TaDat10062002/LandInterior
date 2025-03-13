import React from 'react';
import Carousel from './Carousel';

export default function Section4() {
    return (
        <>
            <section className='section-4 relative top-40 max-xl:top-80 max-md:top-265'>
                <img src="/img/Rectangle 25.png" alt="" />
                <div className='main absolute top-0 right-0 left-0'>
                    <span className='lg:invisible font-medium text-2xl absolute left-35 top-10'>Our projects</span>
                    <div className='grid grid-cols-12 p-15 mt-7'>
                        <div className='lg:col-span-6 col-span-12'>
                            <div className='grid grid-cols-8 lg:gap-5 max-lg:gap-3'>
                                <div className='col-span-4 max-lg:mx-auto max-lg:pl-20'>
                                    <div>
                                        <img className='rounded-2xl' src="/img/image 11.png" alt="" />
                                    </div>
                                    <div className='mt-5'>
                                        <img className='rounded-2xl' src="/img/image 19.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-span-4 max-lg:mx-auto  max-lg:pr-20'>
                                    <div>
                                        <img className='rounded-2xl' src="/img/image 18.png" alt="" />
                                    </div>
                                    <div className='mt-5'>
                                        <img className='rounded-2xl' src="/img/image 17.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='our-projects lg:col-span-6 col-span-12 text-center max-lg:relative absolute top-1/2 right-10 w-1/2 px-10 max-lg:w-auto max-md:text-sm max-lg:text-justify max-lg:px-25 max-md:px-15 max-xl:right-0 mt-5'>
                            <span className='block mt-10 text-3xl max-2xl:mt-5 max-xl:text-2xl max-lg:hidden'>
                                Our Projects
                            </span>
                            <span className='block mt-10 max-2xl:mt-5 max-xl:text-sm max-lg:text-lg max-md:text-sm'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </span>
                            <span className='block mt-10 max-2xl:mt-5 max-xl:text-sm max-lg:text-lg max-md:text-sm'>
                                magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla
                            </span>
                            <span className='block mt-10 mb-10 bg-[#4B2A63] py-5 w-max px-20 text-white mx-auto max-xl:text-sm max-xl:py-3 max-xl:px-15 max-xl:mt-5 max-lg:text-lg max-md:text-sm'>View all</span>
                        </div>
                    </div>
                </div>
                {/* Carousel  */}
                <Carousel />
            </section>
        </>
    );
}
