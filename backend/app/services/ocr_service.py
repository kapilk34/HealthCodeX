import pytesseract
from PIL import Image
from pdf2image import convert_from_bytes
import io

def extract_text(file):
    print(f"Received file: filename={file.filename}, content_type={file.content_type}")
    content = file.file.read()
    if not content or len(content) < 10:
        raise ValueError("Uploaded file is empty or too small to be a valid PDF.")
    try:
        images = convert_from_bytes(content)
    except Exception as e:
        raise ValueError(f"Could not convert file to images. Is it a valid PDF? Error: {e}")
    text = ""
    for img in images:
        text += pytesseract.image_to_string(img)
    if not text.strip():
        raise ValueError("No text could be extracted from the PDF.")
    return text