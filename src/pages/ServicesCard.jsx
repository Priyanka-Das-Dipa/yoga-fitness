import React from 'react';
import { Link } from 'react-router-dom';


const ServicesCard = ({services}) => {

    const {name, image, short_description, price, id} = services;

    return (
        <div className='max-w-7xl mx-auto'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    <div data-aos="slide-up" data-aos-duration="3000" class="relative flex w-96  flex-col rounded-3xl bg-[#525150] text-orange-200 bg-clip-border shadow-lg shadow-[#424241]">
                    <div class="relative mx-4 -mt-6 h-56 overflow-hidden  bg-blue-gray-500 bg-clip-border text-white  ">
                      <img
                        src={image}
                        alt="img-blur-shadow"
                        layout="fill"
                      />
                    </div>
                    <div class="p-6">
                      <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                      </h5>
                      <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        {short_description}
                      </p>
                      <p className='text-xl '> $ {price}</p>

                    </div>
                    <div class="p-6 pt-0">
                      <Link to={`/services/${id}`}
                        class="select-none rounded-lg bg-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                }
            </div>
        </div>
    );
};

export default ServicesCard;