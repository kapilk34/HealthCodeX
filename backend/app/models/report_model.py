from pydantic import BaseModel

class Report(BaseModel):
    disease: str
    icd_code: str
    description: str
