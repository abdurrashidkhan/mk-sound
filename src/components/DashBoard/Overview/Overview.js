import React from 'react';
import TopProducts from './TopProducts';

const Overview = () => {

  return (
    <div className='container mx-auto px-2'>
      {/* headline  */}
      <div className="">
        <h1 className='text-2xl font-semibold'>Headphone</h1>
        <p>For the top band</p>
      </div>
      {/* headphone component */}
      <TopProducts />
    </div>
  );
};

export default Overview;