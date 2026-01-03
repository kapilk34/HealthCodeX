// ResultView.jsx
import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ResultView({ result }) {

  const handleExportPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Title
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text("ICD-11 Medical Coding Report", 14, 20);

    // Subtitle / Date
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(
      `Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      14,
      28
    );

    // Table Data
    const tableData = result.map((r, index) => [
      index + 1,
      r.disease || "-",
      r.icd_code || "-",
      r.confidence ? `${r.confidence}%` : "N/A",
      r.description || "—",
    ]);

    autoTable(doc, {
      startY: 35,
      head: [["#", "Disease", "ICD-11 Code", "Confidence", "Description"]],
      body: tableData,
      theme: "striped",
      headStyles: {
        fillColor: [37, 99, 235], // blue-600
        textColor: 255,
        fontStyle: "bold",
      },
      styles: {
        fontSize: 10,
        cellPadding: 4,
        valign: "middle",
      },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 45 },
        2: { cellWidth: 30 },
        3: { cellWidth: 25 },
        4: { cellWidth: 65 },
      },
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(150);
      doc.text(
        `HealthCodeX • Page ${i} of ${pageCount}`,
        doc.internal.pageSize.getWidth() / 2,
        290,
        { align: "center" }
      );
    }

    doc.save("ICD-11_Medical_Report.pdf");
  };

  if (!result || result.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold text-amber-800 mb-2">
          No ICD-11 Codes Detected
        </h3>
        <p className="text-gray-500">
          Upload a medical report to generate ICD-11 codes.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-700">Detected Codes</h3>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {result.length} codes found
        </span>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
        {result.map((r, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-4"
          >
            <h4 className="font-semibold text-gray-800">{r.disease}</h4>
            <p className="text-sm text-gray-600 mt-1">
              ICD-11 Code: <span className="font-mono font-bold">{r.icd_code}</span>
            </p>
            {r.confidence && (
              <p className="text-sm text-gray-500">
                Confidence: {r.confidence}%
              </p>
            )}
            {r.description && (
              <p className="text-sm text-gray-600 mt-2">
                {r.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={handleExportPDF}
          className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:opacity-90 transition"
        >
          Download PDF Report
        </button>
      </div>
    </div>
  );
}
