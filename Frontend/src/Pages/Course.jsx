import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import list from "../../public/list.json";
import Footer from "../components/Footer";
import axios from "axios";
const Course = () => {
  const [book, setBook] = useState();
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 space-x-3 dark:bg-slate-900 dark:text-white">
        <div className="items-center justify-center text-center pt-28">
          <h1 className=" text-2xl md:text-4xl font-bold">
            We're delighted to have you{" "}
            <span className="text-pink-500 ">here!</span>
          </h1>
          <p className="text-md mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            in natus repellendus qui aut! Accusantium eveniet, numquam quia
            adipisci, possimus assumenda labore quas aliquam, repellat sed
            repudiandae unde modi totam.
          </p>
        </div>
        <div className=" mx-10 mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {book.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Course;
