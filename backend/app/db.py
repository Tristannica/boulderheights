from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

import os
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://user:pass@db/bh")

engine = create_async_engine(DATABASE_URL, echo=False)
async_session = async_sessionmaker(engine, expire_on_commit=False)

async def get_session():
    async with async_session() as session:
        yield session
        