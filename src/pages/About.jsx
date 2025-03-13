import React, { Fragment } from 'react';
import Section1 from '../components/Section/Section1';
import Section2 from '../components/Section/Section2';
import Section3 from '../components/Section/Section3';
import Section4 from '../components/Section/Section4';
import Carousel from '../components/Section/Carousel';
import Section5 from '../components/Section/Section5';
import Section6 from '../components/Section/Section6';
import Section7 from '../components/Section/Section7';

export default function About() {
    return (
        <>
            <div className='About mt-5 w-full'>
                {/* section 1 */}
                <Section1 />

                {/* section 2 */}
                <Section2 />

                {/* section 3 */}
                <Section3 />

                {/* section 4 */}
                <Section4 />

                {/* section 5  */}
                <Section5 />

                {/* section 6 */}
                <Section6 />

                {/* section 7 */}
                <Section7 />
            </div>
        </>
    );
}
