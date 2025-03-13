import React from 'react';

export default function Section6() {
    return (
        <>
            <section className='section-6 relative top-40 max-xl:top-110 max-lg:top-280 max-md:top-470 mt-25'>
                <span className='block w-fit mx-auto text-3xl'>Our Happy Costumers</span>
                <span className='block md:w-1/2 xl:px-35 mt-10 max-sm:px-10 mx-auto text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
                </span>

                <div className="container w-full h-full max-w-800 max-h-600 transform-3d flex justify-center items-end flex-col mt-10 mb-100">
                    <input className='hidden' type="radio" name="slider" id="item-1" defaultChecked />
                    <input className='hidden' type="radio" name="slider" id="item-2" />
                    <input className='hidden' type="radio" name="slider" id="item-3" />
                    <div className="cards relative w-full h-full mb-5">
                        <label className="card absolute w-1/2 left-0 right-0 m-auto transition-transform duration-300 ease-in hover:scale-105 cursor-pointer" htmlFor="item-1" id="song-1">
                            <img className='w-full h-85 fit rounded-2xl object-cover' src="img/scene1.png" alt="song" />
                        </label>
                        <label className="card absolute w-1/2 left-0 right-0 m-auto transition-transform duration-300 ease-in hover:scale-105 cursor-pointer" htmlFor="item-2" id="song-2">
                            <img className='w-full h-85 fit rounded-2xl object-cover -z-1' src="img/scene2.png" alt="song" />
                        </label>
                        <label className="card absolute w-1/2 left-0 right-0 m-auto transition-transform duration-300 ease-in hover:scale-105 cursor-pointer" htmlFor="item-3" id="song-3">
                            <img className='w-full h-85 fit rounded-2xl object-cover' src="img/scene3.png" alt="song" />
                        </label>
                    </div>
                    <div className='absolute left-1/2 -translate-x-1/2 top-45 z-1 max-lg:hidden'>
                        <span>
                            <img className='block mx-auto w-30' src="/img/Ellipse 30.png" alt="" />
                        </span>
                        <div className='brief-content bg-[#ffffff] rounded-lg relative -z-1 -top-15 w-2/3 mx-auto'>
                            <span className='block pt-18 text-center px-18'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
                            </span>
                            <span className='block w-fit mx-auto mt-5 font-medium'>
                                -Jeo Stanlee
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
