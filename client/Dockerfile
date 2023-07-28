# Use a Node.js base image for building the React app
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy the client code into the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Nginx image to serve the built React app
FROM nginx:alpine

# Copy the built app from the previous stage (build) to the Nginx container
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port on which Nginx runs
EXPOSE 80