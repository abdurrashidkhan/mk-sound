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
          <h1>Beats Studio3 Wireless Headphone</h1>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div className="">
            <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
            <p>Price $ 450.55</p>
            <p>color :
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </p>
          </div>
          <div>
            <button>-</button>
            <input type="text" />
            <button>+</button>
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