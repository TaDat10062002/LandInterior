import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className='relative top-30 max-xl:top-110 max-lg:top-250 max-md:top-470 mt-25'>
                {/* DESKTOP  */}
                <div className='desktop max-md:hidden'>
                    <div className="first-content grid grid-cols-9">
                        <span className='col-start-2'>
                            <img src="/img/logo.png" alt="" />
                        </span>
                        <span className='col-start-5 col-end-7 block pt-15 font-medium'>
                            WHAT WE DO
                        </span>
                        <span className='col-start-7 col-end-9 block pt-15 font-medium'>
                            Get in touch
                        </span>
                    </div>
                    <div className="second-content grid grid-cols-9">
                        <span className='col-start-2 col-end-4 block pl-8 mt-5'>
                            We introduce our selves as  LAND Interior and Architectural Design Consultancy – one of the best interior designers in Chennai. Chennai Luxury Interior and Architectural Design Consultancy has challenged the conventional way of interior designing and given new dimensions to the art of interior designing.
                        </span>
                        <span className='col-start-5'>
                            <span className='block'>
                                Interior Design
                            </span>
                            <span className='block'>
                                Kitchen
                            </span>
                            <span className='block'>
                                Ceiling
                            </span>
                            <span className='block'>
                                Bedroom
                            </span>
                            <span className='block'>
                                Smart Home
                            </span>
                        </span>
                        <span className='col-start-7'>
                            <span className='block'>
                                landinteriors@gmail.com
                            </span>
                            <span className='block'>
                                +91 98987 65656
                            </span>
                        </span>
                    </div>
                    <div className="third-content grid grid-cols-9 mt-10">
                        <div className='col-start-2 col-span-3 flex max-lg:col-span-12 max-lg:mx-auto gap-3 ml-8'>
                            <span>
                                <img src="/img/brandico_facebook-rect.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/brandico_linkedin-rect.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/akar-icons_twitter-fill.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/ant-design_youtube-filled.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/bx_bxl-instagram.png" alt="" />
                            </span>
                        </div>
                        <div className='col-span-5 max-lg:col-span-12 max-lg:mt-10'>
                            <div className='col-start-1 col-span-6 flex justify-end max-lg:justify-center gap-15 lg:mr-10'>
                                <span className='font-medium'>
                                    <Link>About</Link>
                                </span>
                                <span className='font-medium'>
                                    <Link>Projects</Link>
                                </span>
                                <span className='font-medium'>
                                    Studio
                                </span>
                                <span className='font-medium'>
                                    <Link>Blog</Link>
                                </span>
                                <span className='font-medium'>
                                    <Link>Contact</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE  */}
                <div className='mobile md:invisible'>
                    <span className='block w-fit mx-auto mt-10'>
                        <img src="../../img/logo.png" alt="" />
                    </span>
                    <span className='block w-fit mx-auto mt-10'>
                        <span className='block text-center font-medium'>landinteriors@gmail.com</span>
                        <span className='block text-center'>+91 98987 65656</span>
                    </span>
                    <span className='block w-fit mx-auto mt-10'>
                        <div className='flex gap-5'>
                            <span>
                                <img src="/img/brandico_facebook-rect.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/brandico_linkedin-rect.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/akar-icons_twitter-fill.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/ant-design_youtube-filled.png" alt="" />
                            </span>
                            <span>
                                <img src="/img/bx_bxl-instagram.png" alt="" />
                            </span>
                        </div>
                    </span>
                </div>
            </footer>
        </>
    );
}
