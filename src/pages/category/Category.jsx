import React from 'react';

const Category = () => {
    return (
        <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                </div>
            </div>

            <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
                <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Category;