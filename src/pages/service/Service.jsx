import React, { useEffect, useState } from 'react';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <section className="bg-slate-50 font-poppins">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl text-black lg:text-6xl font-bold">
                            Our <span className="text-green-400">Services</span>
                        </h1>
                        <p className="text-xl text-black mt-2 lg:text-2xl  font-semibold">
                            From seamless event planning to artiste management, ticketing solutions, digital marketing, and event merchandise – all under one roof
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 font-poppins mt-10 md:grid-cols-2 lg:grid-cols-3">
                        {service.map((item) => (
                            <div key={item.id} className="relative flex w-96 flex-col mt-2 rounded-xl bg-white bg-clip-border font-poppins text-gray-700 shadow-md">
                                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                    <img src={item.image} alt={item.title} layout="fill" />
                                </div>
                                <div className="p-6">
                                    <h5 className="mb-2 block  text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {item.title}
                                    </h5>
                                    <p className="block font-poppins text-base font-light leading-relaxed text-gray-700 antialiased">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="p-6 pt-0">
                                    <button
                                        className="select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;
