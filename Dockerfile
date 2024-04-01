# Stage 1: Build the React App
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g sass

# Copy the entire project to the working directory
COPY . .

# Copy vite.config.js
COPY vite.config.js .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the React App using Nginx
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
