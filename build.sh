#!/bin/bash

set -e

echo "Installing frontend dependencies..."
cd frontend
npm ci

echo "Building frontend..."
npm run build

echo "Frontend build completed successfully."

cd ../backend

echo "Installing backend dependencies..."
python -m pip install -r requirements.txt

echo "Backend setup completed successfully."

echo "ClauseIQ build completed successfully."
