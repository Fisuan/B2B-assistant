from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from app.services.llm_service import LLMService
from typing import List
from pydantic import BaseModel

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

@router.post("/chat")
async def chat_endpoint(
    chat_request: ChatRequest,
    token: str = Depends(oauth2_scheme)
):
    try:
        llm_service = LLMService()
        messages = [{"role": msg.role, "content": msg.content} for msg in chat_request.messages]
        response = await llm_service.get_assistant_response(messages)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/health")
async def health_check():
    return {"status": "healthy"}
