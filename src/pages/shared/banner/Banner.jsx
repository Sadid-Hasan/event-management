import React from 'react';

const Banner = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: 'url(https://i.ibb.co/1z8qFz8/pexels-mikky-k-625644.jpg)'}}>
        <div className="flex items-center justify-center font-poppins w-full h-full bg-gray-900/40">
            <div className="text-center">
                <h1 className="text-3xl text-white lg:text-6xl font-poppins font-bold">Experience the <span className=" text-green-400">Extraordinary</span></h1>
                <p className="text-xl text-white lg:text-2xl font-poppins font-semibold">
                Discover a world of excitement with our electrifying lineup of events
            </p>
                <button className="btn btn-active  text-white btn-secondary">Get Quote</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;