import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY"),
)

MODEL = "meta/llama-3.1-8b-instruct"


def ask_ai(document_text: str, question: str) -> str:
    prompt = f"""
You are ClauseIQ.

Answer ONLY using the uploaded document.

If the answer is not present in the document, reply:
"I could not find this information in the uploaded document."

Document:
{document_text}

Question:
{question}
"""

    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.2,
        max_tokens=500,
    )

    return response.choices[0].message.content