def extract_diseases(text: str):
    if not text:
        return []

    text = text.lower()

    medical_keywords = [
    # Endocrine & Metabolic
    "diabetes",
    "diabetes mellitus",
    "type 1 diabetes",
    "type 2 diabetes",
    "gestational diabetes",
    "hypoglycemia",
    "hyperglycemia",
    "thyroid",
    "hypothyroidism",
    "hyperthyroidism",
    "obesity",
    "metabolic syndrome",

    # Cardiovascular
    "hypertension",
    "high blood pressure",
    "hypotension",
    "heart disease",
    "coronary artery disease",
    "heart attack",
    "myocardial infarction",
    "angina",
    "arrhythmia",
    "stroke",
    "cardiac arrest",
    "heart failure",
    "atherosclerosis",

    # Respiratory
    "asthma",
    "bronchitis",
    "pneumonia",
    "chronic obstructive pulmonary disease",
    "copd",
    "tuberculosis",
    "lung infection",
    "respiratory failure",
    "covid",
    "covid-19",
    "influenza",
    "common cold",

    # Infectious Diseases
    "infection",
    "viral infection",
    "bacterial infection",
    "fungal infection",
    "sepsis",
    "malaria",
    "dengue",
    "chikungunya",
    "typhoid",
    "hepatitis",
    "hiv",
    "aids",
    "urinary tract infection",
    "uti",

    # Neurological
    "migraine",
    "headache",
    "epilepsy",
    "seizure",
    "parkinson's disease",
    "alzheimer's disease",
    "multiple sclerosis",
    "neuropathy",
    "brain tumor",

    # Gastrointestinal
    "gastritis",
    "acid reflux",
    "gastroesophageal reflux disease",
    "gerd",
    "ulcer",
    "irritable bowel syndrome",
    "ibs",
    "crohn's disease",
    "ulcerative colitis",
    "constipation",
    "diarrhea",
    "liver disease",
    "fatty liver",

    # Renal & Urinary
    "kidney disease",
    "chronic kidney disease",
    "ckd",
    "kidney failure",
    "renal failure",
    "nephritis",
    "kidney stone",

    # Musculoskeletal
    "arthritis",
    "osteoarthritis",
    "rheumatoid arthritis",
    "gout",
    "osteoporosis",
    "back pain",
    "joint pain",
    "muscle weakness",

    # Oncology
    "cancer",
    "tumor",
    "malignancy",
    "leukemia",
    "lymphoma",
    "breast cancer",
    "lung cancer",
    "colon cancer",
    "prostate cancer",

    # Mental Health
    "depression",
    "anxiety",
    "panic disorder",
    "bipolar disorder",
    "schizophrenia",
    "insomnia",
    "stress",
    "post traumatic stress disorder",
    "ptsd",

    # General Clinical Terms
    "fever",
    "pain",
    "inflammation",
    "swelling",
    "fatigue",
    "weakness",
    "dizziness",
    "nausea",
    "vomiting",
    "shortness of breath",
    "chest pain"
    ]


    found = set()

    for keyword in medical_keywords:
        if keyword in text:
            found.add(keyword.title())

    return list(found)
