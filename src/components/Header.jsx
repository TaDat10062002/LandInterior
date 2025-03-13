import React from 'react';
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <div className='bg-[#F8F8F8] py-15 pt-8 relative'>
                <div className='grid grid-cols-5 px-2'>
                    <div className='col-span-1'>
                        <img src="../../public/img/logo.png" className='cursor-pointer' alt="" />
                    </div>
                    <div className='above-header col-span-4 pt-7 py-10'>
                        <div className='flex justify-end gap-20 px-10'>
                            <Link>Join us as Design Expert</Link>
                            <Link>Partner with LAND Interiors</Link>
                        </div>
                    </div>
                </div>
                <nav className='navbar-horizontal flex justify-around w-1/2 mx-auto'>
                    <li className='list-none mr-3'>
                        <Link className='font-medium'>About</Link>
                    </li>
                    <li className='list-none  mr-3'>
                        <Link className='font-medium'>Projects</Link>
                    </li>
                    <li className='list-none  mr-3'>
                        <Link className='font-medium'>Studio</Link>
                    </li>
                    <li className='list-none  mr-3'>
                        <Link className='font-medium'>Blog</Link>
                    </li>
                    <li className='list-none  mr-3'>
                        <Link className='font-medium'>Contact</Link>
                    </li>
                </nav>

                <div className='absolute right-10 top-3 sm:hidden'>
                    <div className='relative inline-block group'>
                        <span className='inline-flex border-2 py-1 px-5'>Main Menu
                            <img width="20" height="20" className='ml-2' src="https://img.icons8.com/ios-glyphs/30/drag-list-down.png" alt="drag-list-down" />
                        </span>
                        <div className='dropdown-content hidden group-hover:block text-white rounded-b-2xl pb-2'>
                            <li className='list-none pl-2 hover:bg-gray-200 hover:text-black'>
                                <Link className='font-medium '>About</Link>
                            </li>
                            <li className='list-none pl-2 hover:bg-gray-200 hover:text-black'>
                                <Link className='font-medium'>Projects</Link>
                            </li>
                            <li className='list-none pl-2 hover:bg-gray-200 hover:text-black'>
                                <Link className='font-medium'>Studio</Link>
                            </li>
                            <li className='list-none pl-2 hover:bg-gray-200 hover:text-black'>
                                <Link className='font-medium'>Blog</Link>
                            </li>
                            <li className='list-none pl-2 hover:bg-gray-200 hover:text-black'>
                                <Link className='font-medium'>Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
