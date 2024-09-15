"use client";

import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-screen h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
            <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-red-500">
                    <div className="w-3 h-3 bg-accent rounded-full animate-loading"></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-loading delay-150"></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-loading delay-300"></div>
                </div>
                <div className="text-accent mt-2 font-bold">LOADING...</div>
            </div>
        </div>
    );
};

export default Loader;
