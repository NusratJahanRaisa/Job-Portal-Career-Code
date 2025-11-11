// RegistrationPage.jsx
// import { useState } from "react";

import Lottie from "lottie-react";
import registerLottie from "../../assets/lotties/register.json"

export default function Registration() {


//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // Add API call or form submission logic here
  };



  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">


      <div className="max-w-md w-full space-y-6 p-8  rounded-lg">
        {/* Heading */}
        <div className="text-center">
          <h2 className=" text-blue-400">Register</h2>
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
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Full Name"
            //   value={formData.fullName}
            //   onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

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
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Username"
            //   value={formData.username}
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

          <div>
            <label htmlFor="confirmPassword" className="sr-only">Re-Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Re-Password"
            //   value={formData.confirmPassword}
            //   onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

         <div className="flex items-center mb-4">
         <input
           id="agree"
           name="agree"
           type="checkbox"
           // checked={formData.agree || false}
           // onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
           className="h-5 w-5 text-blue-600 border-gray-300 rounded-4xl"
         />
         <label className="ml-2 block text-sm text-gray-700">
           I agree to all <a href="/terms" className="text-blue-600 underline">Terms & Conditions</a>
         </label>
         </div> 


          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-950 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>




        {/* Bottom text */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="absolute w-64 right-48 bottom-40">
         <Lottie  animationData={registerLottie} loop={true} />
      </div>
    </div>
  );
}
