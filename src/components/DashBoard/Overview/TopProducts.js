import { HeartIcon } from '@heroicons/react/solid';
import React from 'react';
import headphone from '../../../assets/img/topProductss.png'

const TopProducts = () => {
  return (
    <div className='container mx-auto px-2'>
      <div className="flex items-center justify-center">
        <div className="">
          <img src={headphone} alt="" />
        </div>
        <div className="">
          <h1 className='text-xl'>Beats Studio3 Wireless Headphone</h1>
          <div className="rating py-4 ">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
          </div>
          <div className="">
            <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
            <p className='py-2 text-[#23c5b8]'>Price $ 450.55</p>
            <p className='flex items-center gap-4'>color :
              <ul className='flex items-center gap-4 pt-2 '>
                <li className='w-[20px] h-[20px] bg-[#66FF1E] rounded-full'></li>
                <li className='w-[20px] h-[20px] bg-[#13CDDE] rounded-full'></li>
                <li className='w-[20px] h-[20px] bg-[#1E78FF] rounded-full border-[3px] border-[#13CDDE]'></li>
                <li className='w-[20px] h-[20px] bg-[#8E3785] rounded-full'></li>
              </ul>
            </p>
          </div>
          <div className='flex items-center '>
            <button className='text-[55px] px-2 py-2 text-xl placeholder:text-2xl'> - </button>
            <input className='px-4' type="text" placeholder='00' />
            <button className='text-[30px] px-2'> + </button>
          </div>
          <div className="">
            <div className="">
              <HeartIcon />
            </div>
            <div className="">
              <button>Add to card</button>
            </div>
            <div className="">
              <button>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;