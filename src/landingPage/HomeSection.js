import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../App.css';

const HomeSection = () => {
    const usps = [
        "We're a leading Ugandan Ad-Tech startup, redefining corporate advertising with a unique platform that integrates branding, technology, and social responsibility.",
        "We're not just water; we're a refreshing, sustainable experience. Enjoy clean water, earn rewards, and hydrate with purpose. Join us in making every sip count!",
        "We're not just water; we're a refreshing, sustainable experience. Enjoy clean water, earn rewards, and hydrate with purpose. Join us in making every sip count!",
        "We're not just water; we're a refreshing, sustainable experience. Enjoy clean water, earn rewards, and hydrate with purpose. Join us in making every sip count!",
    ];

    const bgImages = [
        "https://ik.imagekit.io/ecjzuksxj/man-holding-mywater-bottle.JPG?updatedAt=1703765623937",
        "https://ik.imagekit.io/ecjzuksxj/background-images1.jpg?updatedAt=1703943823444",
        "https://ik.imagekit.io/ecjzuksxj/background-images2.jpg?updatedAt=1703943822908",
        "https://ik.imagekit.io/ecjzuksxj/background-images3.jpg?updatedAt=1703943822612"
    ];


    const [currentUspIndex, setCurrentUspIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentUspIndex((prevIndex) => (prevIndex + 1) % usps.length);
        }, 5600);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden">

            <img style={{
                opacity: 1,
                transition: 'opacity 755s ease-in-in', // Adjust the duration and easing as needed
            }} className="w-full h-full object-cover" src={bgImages[currentUspIndex]} />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="absolute top-96 px-4 md:px-32 text-white transition-all duration-100 transform opacity-0 animate-fadeIn">
                <div className="max-w-[590px] ">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4">
                        Refreshing Lives, Sustaining the Planet!
                    </h1>

                    <p
                        className="text-xl md:text-lg lg:text-xl font-poppins mb-8"
                        style={{
                            opacity: 1,
                            transition: 'opacity 455s ease-in-in', // Adjust the duration and easing as needed
                        }}
                    >
                        {usps[currentUspIndex]}
                    </p>
                </div>
                <button className="bg-white text-primary-blue font-bold py-2 px-4 rounded-full">
                    <Link
                        activeClass="active"
                        to="features"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: 'pointer' }}
                    >
                        Learn More
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default HomeSection;
