import React from "react";

export default function ResultView({ result }) {
  if (!result || result.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-amber-800 mb-1">No ICD-11 Codes Detected</h3>
        <p className="text-amber-600 text-sm mb-3">
          Upload a medical report to extract ICD-11 codes.
        </p>
        <p className="text-gray-500 text-xs">
          Supported formats: PDF documents or plain text files
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">ICD-11 Code Analysis</h2>
          <p className="text-sm text-gray-500 mt-0.5">Extracted from medical report</p>
        </div>
        <div className="text-right">
          <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-bold">
            {result.length} {result.length === 1 ? 'Code' : 'Codes'}
          </span>
          <p className="text-xs text-gray-500 mt-1">Total detected</p>
        </div>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto pr-2">
        {result.map((r, i) => (
          <div 
            key={i} 
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-all duration-200 hover:border-blue-300"
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-gray-500 px-2 py-0.5 bg-gray-100 rounded flex-shrink-0">
                    #{i + 1}
                  </span>
                  <span className="font-mono font-bold text-blue-700 text-sm truncate">
                    {r.icd_code}
                  </span>
                  {r.confidence && (
                    <div className="ml-auto flex items-center flex-shrink-0">
                      <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                          style={{ width: `${r.confidence}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 ml-2">
                        {r.confidence}%
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Decreased height disease name box */}
                <div className="mb-1">
                  <h4 className="font-semibold text-gray-800 text-base leading-tight line-clamp-1">
                    {r.disease}
                  </h4>
                </div>
              </div>
              <button 
                className="ml-2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                title="Copy code"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
            
            {r.description && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {r.description}
                </p>
                <button className="text-blue-600 text-xs font-medium mt-1 hover:text-blue-800">
                  Show more details →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-3">
          <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Export CSV
          </button>
          <button className="px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Generate Report
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center">
        </div>
      </div>
    </div>
  );
}