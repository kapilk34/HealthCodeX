from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import upload, analyze, report

app = FastAPI(title="MedCodeAI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload.router)
app.include_router(analyze.router)
app.include_router(report.router)
