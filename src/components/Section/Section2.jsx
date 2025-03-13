import React from 'react';

export default function Section2() {
    return (
        <>
            <section className='section-2'>
                <div className='title text-center mt-20'>
                    <span className='text-[#000000] text-[36px] font-medium'>Why LAND Interiors</span>
                </div>

                <div className="flex justify-around mt-20">
                    <div className='relative'>
                        <div className='absolute translate-y-5 translate-x-5 text-1xl font-medium'>50</div>
                        <img src="/img/Vector.png" width={'80%'} alt="" />
                    </div>
                    <div>
                        <img src="/img/bx_bx-home-smile.png" width={'80%'} alt="" />
                    </div>
                    <div>
                        <img src="/img/teenyicons_certificate-outline.png" width={'80%'} alt="" />
                    </div>
                </div>
                <div className="flex justify-around text-center">
                    <div className='w-30'>
                        <p>
                            50 days or we
                            pay you rent
                        </p>
                    </div>
                    <div className='w-30'>
                        <p>
                            1500+happy
                            customers
                        </p>
                    </div>
                    <div className='w-30'>
                        <p>
                            300+ design
                            experties</p>
                    </div>
                </div>
            </section>
        </>
    );
}
