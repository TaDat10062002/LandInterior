import React, { Fragment } from 'react';

export default function Carousel() {
    return (
        <>
            <section className='absolute top-1/2 max-lg:top-240 max-md:top-180'>
                <div className='font-medium text-3xl ml-15'>
                    Blogs
                </div>
                <div className="ml-15 carousel rounded-box gap-10 mt-10">
                    <div className="carousel-item relative pb-30">
                        <img src="/img/image 12.png" className='h-70' alt="" />
                        <div className='absolute top-75 pl-0'>
                            <span className='block font-medium'>Modern Interior</span>
                            <span className='block font-medium mt-2 text-sm'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut
                                aliquam,
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item relative pb-30">
                        <img src="/img/image 13.png" className='h-70' alt="" />
                        <div className='absolute top-75 pl-0'>
                            <span className='block font-medium'>Exterior Project</span>
                            <span className='block font-medium mt-2 text-sm'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut
                                aliquam,
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item relative pb-30">
                        <img src="/img/image 14.png" className='h-70' alt="" />
                        <div className='absolute top-75 pl-0'>
                            <span className='block font-medium'>Grey Beauty</span>
                            <span className='block font-medium mt-2 text-sm'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut
                                aliquam,
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item relative pb-30">
                        <img src="/img/image 20.png" className='h-70' alt="" />
                        <div className='absolute top-75 pl-0'>
                            <span className='block font-medium'>Plantation interior</span>
                            <span className='block font-medium mt-2 text-sm'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut
                                aliquam,
                            </span>
                        </div>
                    </div>
                    <div className="carousel-item relative pb-30">
                        <img src="/img/image 21.png" className='h-70' alt="" />
                        <div className='absolute top-75 pl-0'>
                            <span className='block font-medium'>Role of furnitures</span>
                            <span className='block font-medium mt-2 text-sm'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit ut
                                aliquam,
                            </span>
                        </div>
                    </div>
                </div>
                <div className='mx-auto w-fit md:mt-15 mt-2'>
                    <span className='bg-[#4B2A63] text-white px-15 py-5 max-lg:px-10 max-lg:py-3'>
                        View all
                    </span>
                </div>
            </section>
        </>
    );
}
