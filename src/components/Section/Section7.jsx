import React from 'react';

export default function Section7() {
    return (
        <>
            <section className='section-6 relative top-60 max-xl:top-140 max-lg:top-280 max-md:top-470 mt-25'>
                <span className='font-medium text-2xl block md:ml-50 max-lg:mx-auto max-md:text-center'>
                    Let talk about your Dream home
                </span>
                <div className='grid grid-cols-12 mt-15 text-lg h-40 max-md:relative'>
                    <div className='md:col-span-6 col-span-12 md:pl-50 max-md:pl-20'>
                        <input type="text" placeholder='Name' className='w-1/2 border-none outline-0' name="" id="" />
                        <hr className="w-9/10 h-[1.5px] bg-gray-100 border-0 md:my-4 dark:bg-gray-300" />
                    </div>
                    <div className='md:col-span-6 col-span-12'>
                        <div className='grid grid-cols-6'>
                            <div className="col-span-3 max-md:col-span-6 max-md:pl-20">
                                <input type="text" placeholder='Phone  /  Email' className='w-1/2 border-none outline-0' name="" id="" />
                                <hr className="w-9/10 h-[1.5px] bg-gray-100  border-0 md:my-4 dark:bg-gray-300" />
                            </div>
                            <div className="col-span-3 max-md:absolute max-md:top-45 max-md:left-1/2 max-md:-translate-x-1/2">
                                <span className='bg-[#4B2A63] text-white px-15 py-5'>Send</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
