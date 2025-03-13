import React from 'react';

export default function Section5() {
  return (
    <>
      <section className='section-4 relative top-40 max-xl:top-110 max-lg:top-280 max-md:top-470'>
        <div className='mx-auto w-fit'>
          <span className='text-4xl'>Our Interior Design Products</span>
        </div>
        <div className='grid grid-cols-12 mt-20'>
          <div className='md:col-span-6 col-span-12 max-md:pl-15 max-md:pr-15'>
            <div className='grid grid-cols-12 gap-5 md:ml-35'>
              <div className='col-span-5'>
                <div>
                  <img src="/img/image 24.png" width={'313'} height={'331'} alt="" />
                </div>
                <div className='mt-5'>
                  <img src="/img/image 25.png" width={'313'} height={'331'} alt="" />
                </div>
              </div>
              <div className='col-span-7'>
                <img src="/img/image 23.png" width={'452'} height={'690'} alt="" />
              </div>
            </div>
          </div>
          <div className='md:col-span-6 max-md:invisible'>
            <div className='grid grid-cols-12 gap-5 md:ml-5 md:mr-29'>
              <div className='col-span-5'>
                <div>
                  <img src="/img/image 26.png" width={'313'} height={'331'} alt="" />
                </div>
                <div>
                  <img className='mt-5' src="/img/image 27.png" width={'313'} height={'331px'} alt="" />
                </div>
              </div>
              <div className='col-span-7'>
                <img src="/img/image 28.png" width={'452'} height={'690'} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='relative max-md:-top-40'>
          <span className='block md:w-1/2 xl:px-35 mt-10 max-sm:px-10 mx-auto text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim
          </span>
          <span className='bg-[#4B2A63] w-fit mx-auto px-20 py-3 mt-5 text-white block'>
            View all
          </span>
        </div>
      </section>
    </>
  );
}
