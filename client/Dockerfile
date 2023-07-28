# Use a Node.js base image for building the React app
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy the client code into the container
COPY . .

#expost port 3000
EXPOSE 3000

# Run start script
CMD ["npm", "start"]