import fitz  # PyMuPDF

def extract_text(file):
    file_bytes = file.file.read()
    filename = file.filename.lower()
    text = ""

    try:
        # Handle TEXT-BASED PDFs
        if filename.endswith(".pdf"):
            doc = fitz.open(stream=file_bytes, filetype="pdf")
            for page in doc:
                text += page.get_text()

        # Handle TXT files
        elif filename.endswith(".txt"):
            text = file_bytes.decode("utf-8")

        else:
            print("Unsupported file type for text-only pipeline")

        if not text.strip():
            print("⚠️ No text found in document (scanned PDFs not supported)")

        return text

    except Exception as e:
        print("FILE PARSE ERROR:", e)
        return ""
