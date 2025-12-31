import React from "react";
import { useState } from "react";
import UploadReport from "../components/UploadReport";
import ResultView from "../components/ResultView";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleUploadComplete = (data, filename) => {
    setResult(data);
    setFileName(filename);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - More compact */}
        <header className="text-center mb-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                MedCodeAI
              </h1>
              <p className="text-gray-600 text-base mt-1 max-w-2xl mx-auto">
                AI-powered ICD-11 code extraction from medical reports
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left Column - Compact Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 h-[550px]">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Upload Report</h2>
                    <p className="text-gray-500 text-sm">PDF, TXT formats supported</p>
                  </div>
                </div>

                <UploadReport 
                  setResult={setResult} 
                  setLoading={setLoading}
                  onUploadComplete={handleUploadComplete}
                />
              </div>

              {/* File Upload Status */}
              {fileName && (
                <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-green-800 text-sm truncate">
                      <span className="font-medium">Uploaded:</span> {fileName}
                    </p>
                  </div>
                </div>
              )}

              {/* Loading Indicator */}
              {loading && (
                <div className="mt-6">
                  <Loader />
                </div>
              )}

              {/* Information Cards - Side by side */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-1 text-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    How it works
                  </h4>
                  <p className="text-xs text-blue-700">
                    Upload report. AI extracts and matches ICD-11 codes automatically.
                  </p>
                </div>
                <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-100">
                  <h4 className="font-semibold text-cyan-800 mb-1 text-sm flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                    </svg>
                    Privacy First
                  </h4>
                  <p className="text-xs text-cyan-700">
                    Data processed securely, never stored permanently.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Expanded Results Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 h-[650px] flex flex-col">
              {/* Results Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">ICD-11 Codes</h2>
                      <p className="text-gray-500">Extracted medical codes from report</p>
                    </div>
                  </div>
                  {result.length > 0 && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {result.length} codes found
                    </div>
                  )}
                </div>

                {/* Results Count and Status */}
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Primary diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Secondary codes</span>
                  </div>
                </div>
              </div>

              {/* Results Content - Takes full available height */}
              <div className="flex-1 min-h-[500px]">
                <ResultView result={result} />
              </div>

              {/* Results Footer Info */}
              {result.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Verify codes with medical professionals</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer - More compact */}
        <footer className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            MedCodeAI v1.0 • For medical coding assistance only • Always verify with medical professionals
          </p>
        </footer>
      </div>
    </div>
  );
}