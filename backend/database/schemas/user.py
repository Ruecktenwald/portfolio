from pydantic import BaseModel, EmailStr

# Define the User schema for request validation and response serialization
class UserBase(BaseModel):
    name: str
    email: EmailStr

# Schema for creating a new user (POST requests)
class UserCreate(UserBase):
    pass

# Schema for reading user data (response model)
class UserRead(UserBase):
    id: int

    class Config:
        from_attributes = True  # Use from_attributes instead of orm_mode for Pydantic 2.x
