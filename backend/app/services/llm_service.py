from openai import OpenAI
from app.config import settings

class LLMService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = settings.OPENAI_MODEL

    async def get_assistant_response(self, messages: list, temperature: float = 0.7):
        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=temperature
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"Error getting response from LLM: {str(e)}")

    async def generate_business_response(self, user_input: str, context: str = ""):
        messages = [
            {"role": "system", "content": "You are a professional B2B assistant helping with business-related queries."},
            {"role": "user", "content": f"Context: {context}\nQuery: {user_input}"}
        ]
        return await self.get_assistant_response(messages)
