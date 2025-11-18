import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-blue-200 rounded-full w-16 h-16 animate-ping"></div>
        <div className="absolute border-4 border-blue-600 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
