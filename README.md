# ClauseIQ

ClauseIQ is a web application that helps users understand long PDF documents without reading every page. After uploading a document, users can ask questions in simple language, and the application generates answers using AI based on the uploaded content.

This project was developed as part of a hackathon to explore how large language models can make document analysis faster and more accessible.

## What the application does

Users can upload PDF documents such as contracts, policies, reports, manuals, or academic notes. The application extracts the document text, sends the relevant content to the AI model, and returns an answer to the user's question.

## Technologies Used

Frontend: React, Vite, CSS

Backend: FastAPI, Python

PDF Processing: PyMuPDF

AI Model: NVIDIA NIM API (Llama 3.1)

## Running the Project

Clone the repository.

```bash
git clone https://github.com/riteshhh1408-ui/ClauseIQ.git
```

Start the frontend.

```bash
cd frontend
npm install
npm run dev
```

Start the backend.

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
```

Create a `.env` file inside the `backend` folder and add your NVIDIA API key.

```env
NVIDIA_API_KEY=YOUR_API_KEY
```

## Current Features

The current version allows users to upload PDF documents and ask questions about their content. The backend extracts the document text and uses NVIDIA's Llama model to generate responses based on the uploaded document.

## Future Improvements

In future versions, we plan to add document chunking, vector search, page-level citations, support for multiple PDFs, and OCR for scanned documents.

## Team

This project was built as part of a hackathon by Team ClauseIQ.
