ARG NODE_VERSION=18
ARG PNPM_VERSION=9.0.5

################################################################################
# Base stage for shared node/pnpm setup
FROM node:${NODE_VERSION}-alpine AS base

# Associate with GitHub repository
LABEL org.opencontainers.image.source=https://github.com/noclocks/bastienlaw-remix

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

################################################################################
# Dependencies stage - install all dependencies
FROM base AS deps

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies with a more flexible approach
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --prod

################################################################################
# Builder stage - build the application
FROM base AS builder

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install all dependencies (including dev deps)
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# List build output for debugging
RUN echo "Build directory structure:" && \
    find build -type f

################################################################################
# Runner stage - final production image
FROM node:${NODE_VERSION}-alpine AS runner

# Use production node environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /usr/src/app

# Install only the packages needed to run the server
COPY package.json pnpm-lock.yaml ./
RUN npm install --global pnpm@${PNPM_VERSION} && \
    pnpm install --prod

# Copy server.js and the build directory
COPY server.js ./
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/public ./public

# List directories for debugging
RUN echo "Final build structure:" && \
    find . -type f

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application using the express server
CMD ["node", "server.js"]
