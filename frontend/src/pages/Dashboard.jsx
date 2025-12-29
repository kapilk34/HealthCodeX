import { useState } from "react";
import UploadReport from "../components/UploadReport";
import ResultView from "../components/ResultView";

export default function Dashboard() {
  const [result, setResult] = useState([]);

  return (
    <div>
      <h1>MedCodeAI</h1>
      <UploadReport setResult={setResult} />
      <ResultView result={result} />
    </div>
  );
}
