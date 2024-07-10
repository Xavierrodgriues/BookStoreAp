import React from "react";
import list from "../../public/list.json";
const Card = ({ item }) => {
  return (
    <>
      <div className="card bg-base-100  w-60 md:w-[20vw] shadow-xl my-5 dark:bg-slate-900 dark:text-white dark:border hover:scale-105 duration-300">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-150 py-3">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
