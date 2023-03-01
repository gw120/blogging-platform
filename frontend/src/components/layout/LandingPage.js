import React from 'react';
import { ArrowDownIcon } from '../../Icons';
import devFocusImg from '../../img/undraw_startman1.svg';

const LandingPage = () => (
    <div className="h-screen bg-gray-900 text-gray-100 relative">
        <div className="h-full flex flex-col justify-center items-center px-2">
            <div className="w-11/12 max-w-xs md:max-w-sm lg:max-w-md">
                <img src={devFocusImg} alt="Logo" />
            </div>
            <div className="my-3 text-center select-none">
                <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">
                    Blogging Platform
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-gray-400 py-1 font-light">
                    Create and manage your blog
                </p>
            </div>
            <button className="mt-2 bg-green-600 text-green-100 py-2 px-4 rounded-lg uppercase focus:outline-none focus:shadow-outline hover:bg-green-700">
                Create a blog
            </button>
        </div>
        <div className="absolute bottom-0 left-0 text-center w-full flex justify-center mb-4">
            <ArrowDownIcon className="w-6 h-6 fill-current text-gray-600" />
        </div>
    </div>
);
export default LandingPage;