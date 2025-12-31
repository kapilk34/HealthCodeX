import React from "react";
import api from "../services/api";
import { useState } from "react";

export default function UploadReport({ setResult, setLoading, onUploadComplete }) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.type === "text/plain")) {
      await processFile(file);
    } else {
      alert("Please upload a PDF or TXT file");
    }
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file) => {
    try {
      setLoading(true);
      const form = new FormData();
      form.append("file", file);

      // Upload file
      const upload = await api.post("/upload", form);

      // Analyze extracted text
      const analyze = await api.post("/analyze/", {
        text: upload.data.text,
      });

      setResult(analyze.data);
      onUploadComplete(analyze.data, file.name);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to process file. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div 
        className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
          dragActive 
            ? "border-blue-500 bg-blue-50" 
            : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="max-w-sm mx-auto">
          <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            {dragActive ? "Drop file here" : "Upload Medical Report"}
          </h3>
          <p className="text-gray-500 text-sm mb-3">Drag & drop or click to browse</p>
          
          <input
            type="file"
            onChange={handleFileSelect}
            accept=".pdf,.txt"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              PDF
            </span>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              TXT
            </span>
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              Max 10MB
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}