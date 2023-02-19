import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import UseToken from "../../Hook/UseToken/UseToken";
import Loading from "../../Loading/Loading";
import LoginWithOther from "../Xlogin/Xlogin";

const Login = () => {
  let errorElement = "";
  let navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // hook
  const [token] = UseToken(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    signInWithEmailAndPassword(e.email , e.password);
  };

  useEffect(()=>{
    if (user) {
      navigate(form, { replace: true });
      Swal.fire("Login successfully", "", "success");
    }
  },[user,navigate,form])
  
  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <section style={{ paddingTop: "2rem" }} className="container mx-auto px-4">
      <div className="">
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md  w-full  bg-slate-200 p-4 rounded-lg shadow-lg">
            <div>
              <div className="user_icon">
                <img
                  className="mx-auto  h-20 w-auto"
                  src="https://i.ibb.co/Ct43kdn/image-removebg-preview-6.png"
                  alt="Workflow"
                />
              </div>
              <h2 className="mt-1 font-serif text-center text-3xl font-extrabold text-gray-900">
                Login
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="">
                  <label htmlFor="email" className="text-slate-700 pt-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Email address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Enter Your valid email",
                      },
                    })}
                  />
                  <label className="">
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 text-sm pt-2">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="pt-3">
                  <label htmlFor="password" className="text-slate-700 pt-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,
                        message: "upper and lower case  and a number",
                      },
                      minLength: {
                        value: 6,
                        message: "min 6 characters ",
                      },
                    })}
                  />
                  <label className="">
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-sm pt-2">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="block sm:flex items-center justify-between">
                <div className="flex  items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                {/* <div className="text-sm pt-2 md:p-0">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div> */}
              </div>
                  <div>
                    {errorElement}
                  </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-gradient-to-r from-emerald-400 to-sky-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-bold hoverBtnSpacing"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="mt-5">
              <Link className="text-blue-700 hover:text-blue-900" to={'/signup'}>create a new account ? </Link>
            </div>
            <LoginWithOther></LoginWithOther>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;