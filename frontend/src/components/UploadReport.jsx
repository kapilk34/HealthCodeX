import api from "../services/api";

export default function UploadReport({ setResult }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("file", file);

    const upload = await api.post("/upload", form);
    const analyze = await api.post("/analyze", {
      text: upload.data.text,
    });

    setResult(analyze.data);
  };

  return <input type="file" onChange={handleUpload} />;
}
