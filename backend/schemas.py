from pydantic import BaseModel
from typing import Optional, List


class Personal(BaseModel):
    name: str
    date_of_birth: str
    nationality: str
    sex: str
    phone: str
    email: str
    linkedIn: str
    address: str
    bio: str

    class Config:
        orm_mode = True


class Hobby(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class Language(BaseModel):
    id: int
    language: str
    level: str

    class Config:
        orm_mode = True


class Experience(BaseModel):
    id: int
    title: str
    company: str
    location: str
    period: str
    details: List[str]

    class Config:
        orm_mode = True


class Education(BaseModel):
    id: int
    degree: str
    school: str
    location: str
    period: str
    grade: Optional[str] = None
    subjects: str

    class Config:
        orm_mode = True


class Project(BaseModel):
    id: int
    title: str
    description: str
    link: str
    live_demo: Optional[str] = None
    period: str

    class Config:
        orm_mode = True


class Award(BaseModel):
    id: int
    title: str
    description: str
    link: str
    year: int

    class Config:
        orm_mode = True


class Publication(BaseModel):
    id: int
    title: str
    description: str
    year: int

    class Config:
        orm_mode = True


class Skill(BaseModel):
    id: int
    category: str
    name: str

    class Config:
        orm_mode = True
