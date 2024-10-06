from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import models
from database.db_setup import get_db
from database.schemas.service import ServiceCreate, ServiceRead

router = APIRouter()

@router.get("/", response_model=list[ServiceRead])
def get_services(db: Session = Depends(get_db)):
    services = db.query(models.Service).all()
    return services

@router.get("/{service_id}", response_model=ServiceRead)
def get_service(service_id: int, db: Session = Depends(get_db)):
    service = db.query(models.Service).filter(models.Service.id == service_id).first()
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

@router.post("/", response_model=ServiceRead)
def create_service(service: ServiceCreate, db: Session = Depends(get_db)):
    new_service = models.Service(name=service.name, description=service.description)
    db.add(new_service)
    db.commit()
    db.refresh(new_service)
    return new_service
