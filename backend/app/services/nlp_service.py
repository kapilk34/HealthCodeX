import spacy

nlp = spacy.load("en_core_web_sm")

def extract_diseases(text: str):
    doc = nlp(text)
    diseases = []

    for ent in doc.ents:
        if ent.label_ in ["DISEASE", "ORG", "NORP"]:
            diseases.append(ent.text)

    return list(set(diseases))
