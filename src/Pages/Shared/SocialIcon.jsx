import React from 'react';
import { AuthContext } from '../../Contexts & Providers/AuthContext';
import { use } from 'react';
import { useLocation, useNavigate } from 'react-router';

const SocialIcon = () => {

    const {GoogleLogin} = use(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'

    const handleGoogleLogin=()=>{
        GoogleLogin()
        .then(res=>{
          console.log(res)
          navigate(from)
        })
        .catch(err=>console.log(err))
    }
    return (
        <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full py-4 px-4 border border-gray-300 rounded-md bg-white text-base font-medium text-gray-700 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
    );
};

export default SocialIcon;