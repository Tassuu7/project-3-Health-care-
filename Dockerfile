# PulseCare Enterprise Health Platform - Production Dockerfile
FROM node:20-alpine AS base

# Install Python & system build dependencies
RUN apk add --no-cache python3 py3-pip make g++ git

WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json requirements.txt ./

# Install Node.js & Python dependencies
RUN npm ci --omit=dev && \
    python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY . .

# Set environment variables
ENV NODE_ENV=production \
    PORT=3050 \
    HOST=0.0.0.0 \
    PATH="/opt/venv/bin:$PATH"

# Expose HTTP port
EXPOSE 3050

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3050/api/health', (r) => { process.exit(r.statusCode === 200 ? 0 : 1); });"

# Default container entrypoint
CMD ["node", "server.js"]
