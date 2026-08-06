                +----------------------+
                |        User          |
                +----------+-----------+
                           |
                           |
                    Upload PDF / Ask Question
                           |
                           v
                +----------------------+
                |   React Frontend     |
                +----------+-----------+
                           |
                     REST API Request
                           |
                           v
                +----------------------+
                |  FastAPI Backend     |
                +----------+-----------+
                           |
            +--------------+--------------+
            |                             |
            |                             |
            v                             v
     PDF Processing                AI Processing
(PyMuPDF / pdfplumber)            (NVIDIA API)
            |                             |
            |                             |
            +--------------+--------------+
                           |
                     ChromaDB
                  (Vector Database)
                           |
                           |
                     Relevant Chunks
                           |
                           |
                     NVIDIA API
                           |
                           |
                Answer + Citation
                           |
                           |
                    React Frontend