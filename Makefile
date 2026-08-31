# PulseCare Enterprise Platform - Development and Build Automation Makefile
.PHONY: all install build start test measure lint clean docker-build docker-run

all: install test

install:
	@echo "Installing Node.js dependencies..."
	npm install
	@echo "Installing Python evaluation dependencies..."
	python3 -m pip install -r requirements.txt

build:
	@echo "Building and validating PulseCare clinical platform..."
	npm run build

start:
	@echo "Starting PulseCare clinical server on port 3050..."
	node server.js

test:
	@echo "Running automated clinical test suites..."
	node tests/run-tests.js

measure:
	@echo "Auditing production lines of code (LOC)..."
	python3 measure.py

clean:
	@echo "Cleaning temporary files and caches..."
	rm -rf dist build coverage .nyc_output *.log tmp temp

docker-build:
	docker build -t pulsecare-healthcare:latest .

docker-run:
	docker run -p 3050:3050 --name pulsecare pulsecare-healthcare:latest
