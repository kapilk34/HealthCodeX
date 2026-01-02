// Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Processing Medical Report</h3>
          <p className="text-gray-600 text-center mb-6">
            Our AI is analyzing your document and extracting ICD-11 codes...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full animate-pulse w-3/4"></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            This usually takes 10-30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}