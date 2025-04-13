from sqlalchemy import Column, Integer, String, Text
from database import Base
from sqlalchemy.types import JSON


class Personal(Base):
    __tablename__ = "personal"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    date_of_birth = Column(String)
    nationality = Column(String)
    sex = Column(String)
    phone = Column(String)
    email = Column(String)
    linkedIn = Column(String)
    address = Column(String)
    bio = Column(Text)

class Hobby(Base):
    __tablename__ = "hobbies"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)

class Language(Base):
    __tablename__ = "languages"
    id = Column(Integer, primary_key=True, index=True)
    language = Column(String)
    level = Column(String)

class Experience(Base):
    __tablename__ = "experience"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    company = Column(String)
    location = Column(String)
    period = Column(String)
    details = Column(JSON)

class Education(Base):
    __tablename__ = "education"
    id = Column(Integer, primary_key=True, index=True)
    degree = Column(String)
    school = Column(String)
    location = Column(String)
    period = Column(String)
    grade = Column(String, nullable=True)
    subjects = Column(Text)

class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    link = Column(String)
    live_demo = Column(String, nullable=True)
    period = Column(String)

class Award(Base):
    __tablename__ = "awards"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    link = Column(String)
    year = Column(Integer)

class Publication(Base):
    __tablename__ = "publications"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    year = Column(Integer)

class Skill(Base):
    __tablename__ = "skills"
    id = Column(Integer, primary_key=True, index=True)
    category = Column(String)
    name = Column(String)
