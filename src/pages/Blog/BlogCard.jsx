import React from "react";


const BlogCard = ({ blogs }) => {
  
  const { title, image, description, date, time } = blogs;
  return (
    <div data-aos="zoom-in-up"
    data-aos-duration="3000" className="mt-3 ml-2">
      <div className="relative flex md:w-full w-96 max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-orange-400 antialiased">
          <span className="badge lowercase text-orange-300 px-4 py-3 mr-5">Fitness</span>
          <span className="badge lowercase text-orange-300 px-4 py-3">Yoga Pratice</span>
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <div>
            <p className="flex gap-2 items-center">
              Pasted Time & Date:
              <span className="text-orange-300 font-medium">
                {date} {time}
              </span>
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default BlogCard;
