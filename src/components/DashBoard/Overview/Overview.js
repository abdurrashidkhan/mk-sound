import React from 'react';
import RightSideslide from './RightSideslide';
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
      <div className="">
        <div className="flex justify-between">
          <div className="w-[70%]">
            <TopProducts />
          </div>
          <div className="w-[30%] ">
            <div className="">
            <RightSideslide></RightSideslide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;