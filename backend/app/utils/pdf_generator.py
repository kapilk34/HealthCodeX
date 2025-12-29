from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import uuid

def generate_pdf(data):
    filename = f"icd_report_{uuid.uuid4().hex}.pdf"
    c = canvas.Canvas(filename, pagesize=A4)

    y = 800
    c.setFont("Helvetica-Bold", 14)
    c.drawString(50, y, "MedCodeAI – ICD-11 Report")
    y -= 40

    c.setFont("Helvetica", 11)

    for item in data:
        c.drawString(50, y, f"{item['disease']} → {item['icd_code']}")
        y -= 20

    c.save()
    return filename
