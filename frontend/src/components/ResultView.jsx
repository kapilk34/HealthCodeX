export default function ResultView({ result }) {
  return (
    <div>
      {result.map((r, i) => (
        <div key={i}>
          <strong>{r.disease}</strong> → {r.icd_code}
        </div>
      ))}
    </div>
  );
}
