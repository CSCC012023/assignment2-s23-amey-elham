# Use a Node.js base image
FROM node:14

ENV MONGO_URI=mongodb+srv://cscc01:123@cluster0.4h2rq8m.mongodb.net/CSCC01-200-OK-DB?retryWrites=true&w=majority
ENV PORT=8080
ENV JWT_SECRET=playbooksecret
ENV EMAIL=playbookverse@gmail.com
ENV PASSWORD=fxwtqrmxipguytry

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy the server code into the container
COPY . .

#expost port 8080
EXPOSE 8080
# Specify the command to start the server
CMD ["node", "server.js"]