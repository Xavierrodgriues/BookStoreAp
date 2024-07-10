import React from "react";
import banner from "../../public/Banner.png";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 space-x-3 dark:bg-slate-900 flex flex-col md:flex-row my-10 ">
        <div className="w-full order-2 md:w-1/2  md:mt-32  md:order-1 ">
          <div className="space-y-10 mx-5 justify md:normal md:mx-0">
            <h1 className="font-bold text-4xl md:text-5xl">
              Hello! welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!</span>
            </h1>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              recusandae, omnis rem officia expedita aperiam quia ad
              necessitatibus deserunt voluptas explicabo aliquid perferendis!
              Quaerat, deleniti nemo. Omnis vel quisquam amet?
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-2 md:mt-3 ml-4 md:ml-0">
            Secondary
          </button>
        </div>
        <div className="w-full order-1 py-0 md:w-1/2 ">
          <img src={banner} className="mb-0  md:mt-10 md:ml-10"></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
