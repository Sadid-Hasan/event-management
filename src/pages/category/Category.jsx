import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Category = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);

    return (
        <div>
            <section className="bg-slate-100 font-poppins">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl text-black lg:text-6xl font-poppins font-bold">
                            What We <span className="text-green-400">Do</span>
                        </h1>
                        <p className="text-xl mt-2 text-black lg:text-2xl font-poppins font-semibold">
                            We curate a vibrant tapestry of entertainment experiences, bringing to life the pulse of
                            creativity and excitement.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                        {category.map(categoryItem => (
                            <div key={categoryItem.id} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700  font-poppins shadow-lg">
                                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                    <img src={categoryItem.image} alt={categoryItem.title} />
                                    
                                    <button
                                        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-dark="true"
                                    >
                                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h5 className="block  font-poppins text-xl font-medium leading-snug tracking-normal text-gray-900 antialiased">
                                            {categoryItem.title}
                                        </h5>
                                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mt-0.5 h-5 w-5 text-yellow-700">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                            </svg>
                                            {categoryItem.rating}
                                        </p>
                                    </div>
                                    <p className="block font-poppins text-base font-light leading-relaxed text-gray-700 antialiased">
                                        {categoryItem.description}
                                    </p>
                                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3"></div>
                                    <p className='block  font-poppins text-xl font-medium leading-snug tracking-normal text-gray-900 antialiased'>Price Starting from: <span className=' text-gray-600'>{categoryItem.Price} $</span> </p>
                                </div>
                                <div className="p-6 pt-3">
                                    <button
                                        className="block w-full select-none rounded-lg bg-purple-500 py-3.5 px-7 text-center align-middle font-poppins text-sm font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                        data-ripple-light="true"
                                    >
                                        Book Now
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

export default Category;
