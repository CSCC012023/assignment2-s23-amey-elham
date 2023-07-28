# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the server code into the container
COPY . .

# Specify the command to start the server
CMD ["node", "server.js"]