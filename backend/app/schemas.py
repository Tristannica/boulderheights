from pydantic import BaseModel, Field

class EntryIn(BaseModel):
    title: str = Field(..., max_length=100)
    description: str | None = None
    lat: float
    lng: float

class EntryOut(EntryIn):
    id: int
    class Config:
        orm_mode = True