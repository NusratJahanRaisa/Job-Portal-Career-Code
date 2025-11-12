// RegistrationPage.jsx
// import { useState } from "react";

import Lottie from "lottie-react";
import planeLottie from "../../assets/lotties/Paperplane.json"
// import colleagues from "../../assets/lotties/Colleagues.json"
import { AuthContext } from "../../Contexts & Providers/AuthContext";
import { use } from "react";

export default function SignIn() {


  const {signInUser} = use(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // const fullName = form.fullName.value;
    const email = form.email.value;
    // const username = form.username.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;
    
    signInUser(email,password)
    .then(res=>{
      console.log(res);
    }
    )
    .catch(err=>{
      console.log(err);
    })
  };



  return (
    <div>
      <div className="min-h-screen flex items-center justify-center flex-col py-12 px-4 sm:px-6 lg:px-8 relative">


      <div className="max-w-md w-full space-y-6 p-8  rounded-lg">
        {/* Heading */}
        <div className="text-center">
          <h2 className=" text-blue-400">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">
            Start for free today. Access to all features. No credit card required.
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-6 flex justify-center">

          <button className="flex items-center justify-center w-full py-4 px-4 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>







        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
            //   value={formData.email}
            //   onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
            //   value={formData.password}
            //   onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-950 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>




        {/* Bottom text */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Do not have an account?{" "}
          <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Sign Up
          </a>
        </p>
      </div>

      <div className="absolute w-xl -left-2 bottom-60">
         <Lottie  animationData={planeLottie} loop={true} />
      </div>

      {/* <div className="absolute w-64 left-48 -bottom-20">
         <Lottie  animationData={colleagues} loop={true} />
      </div> */}

    </div>

    <div className="pt-12 w-7xl mx-auto text-gray-300">
        <hr/>
      </div>

    </div>
  );
}
