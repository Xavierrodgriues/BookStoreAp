import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
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
                placeholder="Enter your Email"
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
            <div className="flex justify-between items-center mt-2">
              <button className="bg-pink-500 text-white rounded-lg py-1 px-3 mt-3 hover:bg-pink-700">
                Login
              </button>
              <span className="">
                Not registered?{" "}
                <a
                  href="/signup "
                  className="underline text-blue-400 cursor-pointer"
                >
                  SignUp
                </a>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
