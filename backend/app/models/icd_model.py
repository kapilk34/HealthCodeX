from pydantic import BaseModel

class ICD(BaseModel):
    code: str
    title: str
