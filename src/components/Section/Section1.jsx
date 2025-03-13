import React from 'react';

export default function Section1() {
    return (
        <>
            <section className='section-1'>
                <div className='grid grid-cols-6 relative'>
                    <div className='lg:col-span-4 md:col-span-4 col-span-12'>
                        <img src="/img/image 15.png" alt="" />
                    </div>
                    <div className='invisible-content lg:col-span-4 md:col-span-4 col-span-12 text-center absolute'>
                        <span className='block text-2xl font-medium'>Get personalised home interiors</span>
                        <span className='block text-2xl text-[#241330] font-bold'>in just 50 days</span>
                        <span className='block bg-[#4B2A63] font-bold text-white py-5 mt-5'>SPEAK WITH A ONLINE CONSULTANT</span>
                    </div>
                </div>
            </section>
        </>
    );
}
