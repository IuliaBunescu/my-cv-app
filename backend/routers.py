from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

from database import SessionLocal
import models
import schemas

router = APIRouter()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Routes

# Personal route
@router.get("/personal", response_model=schemas.Personal)
def get_personal(db: Session = Depends(get_db)):
    return db.query(models.Personal).first()

# Hobbies route
@router.get("/hobbies", response_model=List[schemas.Hobby])
def get_hobbies(db: Session = Depends(get_db)):
    return db.query(models.Hobby).all()

# Languages route
@router.get("/languages", response_model=List[schemas.Language])
def get_languages(db: Session = Depends(get_db)):
    return db.query(models.Language).all()

# Experience route
@router.get("/experience", response_model=List[schemas.Experience])
def get_experience(db: Session = Depends(get_db)):
    return db.query(models.Experience).all()

# Education route
@router.get("/education", response_model=List[schemas.Education])
def get_education(db: Session = Depends(get_db)):
    return db.query(models.Education).all()

# Skills route

@router.get("/skills")
def get_skills():
    db: Session = SessionLocal()
    
    # Fetch all skills from the database
    skills = db.query(models.Skill).all()
    
    # Group skills by category
    grouped_skills = {}
    for skill in skills:
        if skill.category not in grouped_skills:
            grouped_skills[skill.category] = []
        grouped_skills[skill.category].append(skill.name)
    
    db.close()
    
    return grouped_skills

# Projects route
@router.get("/projects", response_model=List[schemas.Project])
def get_projects(db: Session = Depends(get_db)):
    return db.query(models.Project).all()

# Awards route
@router.get("/awards", response_model=List[schemas.Award])
def get_awards(db: Session = Depends(get_db)):
    return db.query(models.Award).all()

# Publications route
@router.get("/publications", response_model=List[schemas.Publication])
def get_publications(db: Session = Depends(get_db)):
    return db.query(models.Publication).all()
