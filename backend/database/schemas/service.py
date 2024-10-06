from pydantic import BaseModel

# Define the Service schema for request validation and response serialization
class ServiceBase(BaseModel):
    name: str
    description: str

# Schema for creating a new service (POST requests)
class ServiceCreate(ServiceBase):
    pass

# Schema for reading service data (response model)
class ServiceRead(ServiceBase):
    id: int

    class Config:
        from_attributes = True  # Use from_attributes instead of orm_mode for Pydantic 2.x
