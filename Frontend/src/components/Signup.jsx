import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="my-2">
                <span>Name</span>
                <br />
                <input
                  placeholder="Enter your Name"
                  className="w-full px-2 py-1 border rounded-md mt-1"
                  {...register("name", { required: true })}
                ></input>
                <br />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="my-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-2 py-1 border rounded-md mt-1"
                  {...register("email", { required: true })}
                ></input>
                <br />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="my-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full px-2 py-1 border rounded-md mt-1"
                  {...register("password", { required: true })}
                ></input>
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex gap-10 justify-between mt-2 items-center">
                <button className="bg-pink-500 text-white rounded-lg py-1 px-3 mt-3 hover:bg-pink-700">
                  SignUp
                </button>
                <span className="">
                  Already have an account?{" "}
                  <button
                    className="underline text-blue-400 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
