def format_ehr(patient_id, icd_data):
    return {
        "patient_id": patient_id,
        "diagnosis": icd_data
    }
