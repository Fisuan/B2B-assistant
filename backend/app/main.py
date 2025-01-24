from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router as api_router
from app.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    debug=settings.DEBUG_MODE
)

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключаем роуты
app.include_router(api_router, prefix=settings.API_V1_PREFIX)

@app.get("/")
async def root():
    return {"message": "Welcome to B2B Assistant API"}
