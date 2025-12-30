def extract_diseases(text: str):
    if not text:
        return []

    text = text.lower()

    medical_keywords = [
        "diabetes",
        "diabetes mellitus",
        "type 2 diabetes",
        "hypertension",
        "high blood pressure",
        "asthma",
        "cancer",
        "tuberculosis",
        "thyroid",
        "covid",
        "infection"
    ]

    found = set()

    for keyword in medical_keywords:
        if keyword in text:
            found.add(keyword.title())

    return list(found)
