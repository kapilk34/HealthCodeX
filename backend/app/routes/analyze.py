from fastapi import APIRouter
from pydantic import BaseModel
from app.services.nlp_service import extract_diseases
from app.services.icd_mapper import map_to_icd

router = APIRouter(prefix="/analyze", tags=["Analyze"])

class AnalyzeRequest(BaseModel):
    text: str

@router.post("/")
def analyze_report(req: AnalyzeRequest):
    diseases = extract_diseases(req.text)
    icd_results = map_to_icd(diseases)
    return icd_results
