from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.db_setup import engine, Base  # Assuming you have db_setup.py for your database
from api.v1 import users, services  # Assuming you have users and services endpoints

app = FastAPI()

# Create the database tables (only recommended for development, use Alembic for production)
Base.metadata.create_all(bind=engine)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust to allow specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(users.router, prefix="/api/v1/users", tags=["users"])
app.include_router(services.router, prefix="/api/v1/services", tags=["services"])

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to the FastAPI app"}

# Health check endpoint (optional)
@app.get("/health")
def health_check():
    return {"status": "ok"}

# Example of error handling (optional)
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(status_code=exc.status_code, content={"message": exc.detail})

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(status_code=400, content={"message": "Validation error"})
