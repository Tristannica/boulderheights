from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..db import get_session
from .. import models, schemas

router = APIRouter(tags=["Entries"])

@router.get("/", response_model=list[schemas.EntryOut])
async def list_entries(db: AsyncSession = Depends(get_session)):
    result = await db.execute(models.Entry.__table__.select())
    return result.mappings().all()

@router.post("/", response_model=schemas.EntryOut)
async def create_entry(entry: schemas.EntryIn, db: AsyncSession = Depends(get_session)):
    db_entry = models.Entry(**entry.dict())
    db.add(db_entry)
    await db.commit()
    await db.refresh(db_entry)
    return db_entry