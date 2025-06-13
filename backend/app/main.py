from fastapi import FastAPI
from .routers import entries

app = FastAPI(title="Boulder Heights API", version="0.1.0")

app.include_router(entries.router, prefix="/entries")