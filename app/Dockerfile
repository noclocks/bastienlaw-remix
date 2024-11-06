# syntax=docker/dockerfile:1

# ENV COREPACK_ENABLE_STRICT=0

ARG NODE_VERSION=20.11.0
ARG PNPM_VERSION=9.7.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine AS base

ENV DOCKER_BUILDKIT=1

# Associate with GitHub repository
LABEL org.opencontainers.image.source=https://github.com/noclocks/bastienlaw-remix

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

################################################################################
# Create a stage for installing production dependecies.
FROM base AS deps

# Download dependencies AS a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Leverage bind mounts to package.json and pnpm-lock.yaml to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install

################################################################################
# Create a stage for building the application.
FROM deps AS build

# Download additional development dependencies before building, AS some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Copy the rest of the source files into the image.
COPY . .
# Run the build script.
RUN pnpm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base AS final

# Use production node environment by default.
ENV NODE_ENV=production
# ENV NODE_ENV=development

# # Run the application AS a non-root user.
USER node

# Copy package.json so that package manager commands can be used.
COPY package.json .

# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build ./build

ENV HOST='0.0.0.0'
# ENV PORT=8080
# ARG PORT=8080
# ENV PORT=${PORT}

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["pnpm", "run", "serve"]
