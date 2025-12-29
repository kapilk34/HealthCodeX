import json
from app.config import DATASET_PATH

with open(DATASET_PATH, "r") as f:
    ICD_DATA = json.load(f)

def map_to_icd(diseases):
    results = []

    for disease in diseases:
        for icd in ICD_DATA:
            if disease.lower() in icd["title"].lower():
                results.append({
                    "disease": disease,
                    "icd_code": icd["code"],
                    "description": icd["title"]
                })
                break

    return results
