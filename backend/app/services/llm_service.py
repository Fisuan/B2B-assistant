from openai import AsyncOpenAI
from app.config import settings

class LLMService:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = "gpt-3.5-turbo"

    async def get_assistant_response(self, messages: list):
        try:
            completion = await self.client.chat.completions.create(
                model=self.model,
                messages=[{
                    "role": "user",
                    "content": messages[0].content
                }]
            )
            return completion.choices[0].message.content
        except Exception as e:
            if "insufficient_quota" in str(e):
                return "Извините, достигнут лимит запросов к AI. Пожалуйста, попробуйте позже."
            print(f"Error in OpenAI call: {str(e)}")
            raise
