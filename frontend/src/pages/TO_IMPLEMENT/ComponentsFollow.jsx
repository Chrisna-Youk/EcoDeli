import React from 'react';

const ExampleServiceAdPage = () => {
  return (
    <div className="flex flex-row gap-5 text-md justify-center">


        <div className='flex flex-col items-center'>
            <img className='h-15' src="../cart-check-icon.svg" alt="" />
            <h3 className='font-semibold'>Order Placement</h3>
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-12 mt-4' src="../arrow-icon.svg" alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-15' src="../trolley-icon.svg" alt="" />
            <h3 className='font-semibold'>Picking</h3>
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-12 mt-4' src="../arrow-icon.svg" alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-15' src="../sorting-icon.svg" alt="" />
            <h3 className='font-semibold'>Sorting</h3>
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-12 mt-4' src="../arrow-icon.svg" alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-15' src="../package-icon.svg" alt="" />
            <h3 className='font-semibold'>Packing</h3>
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-12 mt-4' src="../arrow-icon.svg" alt="" />
        </div>

        <div className='flex flex-col items-center'>
            <img className='h-15' src="../truck-icon.svg" alt="" />
            <h3 className='font-semibold'>Shipping</h3>
        </div>
    </div>
  );
};

export default ExampleServiceAdPage;
