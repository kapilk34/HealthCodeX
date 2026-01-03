// Dashboard.jsx
import React, { useState } from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              MedCodeAI
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AI-powered ICD-11 code extraction from medical reports
          </p>
        </header>

        {/* ===== Equal Split Dashboard ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Upload */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Upload Medical Report
                </h2>
                <p className="text-gray-500">Supported formats: PDF, TXT</p>
              </div>
            </div>

            <UploadReport
              setResult={setResult}
              setLoading={setLoading}
              onUploadComplete={handleUploadComplete}
            />

            {fileName && (
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-green-800">
                    <span className="font-medium">File uploaded:</span>{" "}
                    {fileName}
                  </p>
                </div>
              </div>
            )}

            {loading && <Loader />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-2">
                  How it works
                </h4>
                <p className="text-sm text-blue-700">
                  Upload a medical report and our AI automatically extracts
                  ICD-11 codes.
                </p>
              </div>
              <div className="bg-cyan-50 p-4 rounded-xl">
                <h4 className="font-semibold text-cyan-800 mb-2">
                  Privacy First
                </h4>
                <p className="text-sm text-cyan-700">
                  Your medical data is processed securely and never stored.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Results */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  ICD-11 Codes
                </h2>
                <p className="text-gray-500">Extracted from report</p>
              </div>
            </div>

            <ResultView result={result} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            MedCodeAI v1.0 • For assistance only • Always verify medically
          </p>
        </footer>
      </div>
    </div>
  );
}
