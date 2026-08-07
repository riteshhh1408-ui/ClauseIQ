from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import shutil

from utils.pdf_reader import extract_text
from ai.nvidia_client import ask_ai

app = FastAPI(
    title="ClauseIQ API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://localhost:5176",
        "http://localhost:5177",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Latest uploaded document text
DOCUMENT_TEXT = ""


class Question(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "ClauseIQ Backend Running 🚀"
    }


@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    global DOCUMENT_TEXT

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    DOCUMENT_TEXT = extract_text(file_path)

    return {
        "status": "success",
        "filename": file.filename,
        "characters": len(DOCUMENT_TEXT),
        "preview": DOCUMENT_TEXT[:500]
    }


@app.post("/ask")
async def ask(question: Question):

    global DOCUMENT_TEXT

    if DOCUMENT_TEXT == "":
        return {
            "error": "Please upload a PDF first."
        }

    answer = ask_ai(DOCUMENT_TEXT, question.question)

    return {
        "answer": answer
    }