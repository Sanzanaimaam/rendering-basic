"use client";

import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount]=useState(0)
    const handleIncrease = () => {
        console.log('button clicked')
        setCount(count+1)
    }
    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>Counter:{count}</h2>
            <button
                onClick={handleIncrease}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 active:scale-95 transition"
            >
                Increase
            </button>
        </div>
    );
};

export default Counter;