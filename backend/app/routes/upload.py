from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ocr_service import extract_text

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files allowed")

    text = extract_text(file)

    return {
        "filename": file.filename,
        "text": text
    }
