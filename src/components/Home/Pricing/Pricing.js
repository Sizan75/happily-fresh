import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-sky-600 sm:text-4xl md:mx-auto">
                    Delivery Charges
                </h2>
                
            </div>
            <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
                <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                    <div className="mb-6">
                        <div className="flex items-center justify-between pb-6 mb-6 border-b">
                            <div>
                                <p className="text-3xl font-extrabold">Fast Delivery</p>
                            </div>
                            
                        </div>
                        <div>
                            <p className="mb-2 font-bold tracking-wide">Advantage</p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="mr-2">
                                        <svg
                                            className="w-4 h-4 text-deep-purple-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">
                                        20min Delivary
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-2">
                                        <svg
                                            className="w-4 h-4 text-deep-purple-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">100tk delivery charge</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-sky-700 rounded shadow-md hover:bg-sky-900 focus:shadow-outline focus:outline-none"
                        >
                        Start
                        </Link>
                        
                    </div>
                </div>
                <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
                    <div className="mb-6">
                        <div className="flex items-center justify-between pb-6 mb-6 border-b">
                            <div>
                                <p className="text-3xl font-extrabold">Regular Delivery</p>
                            </div>
                            
                        </div>
                        <div>
                            <p className="mb-2 font-bold tracking-wide">Advantage</p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <div className="mr-2">
                                        <svg
                                            className="w-4 h-4 text-deep-purple-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">
                                        1hr-1.30hr Delivary
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-2">
                                        <svg
                                            className="w-4 h-4 text-deep-purple-accent-400"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLidth="2"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="currentColor"
                                                points="6,12 10,16 18,8"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                fill="none"
                                                r="11"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">60tk delivery charge</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-sky-700 rounded shadow-md hover:bg-sky-900 focus:shadow-outline focus:outline-none"
                        >
                        Start
                        </Link>
                        
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default Pricing;