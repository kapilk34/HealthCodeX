from fastapi import APIRouter, UploadFile, File
from app.services.ocr_service import extract_text

router = APIRouter(prefix="/upload", tags=["Upload"])

@router.post("/")
async def upload_report(file: UploadFile = File(...)):
    text = extract_text(file)
    return {"text": text}
