from fastapi import APIRouter
from app.utils.pdf_generator import generate_pdf

router = APIRouter(prefix="/report", tags=["Report"])

@router.post("/")
def generate_report(data: list):
    filename = generate_pdf(data)
    return {"report": filename}
