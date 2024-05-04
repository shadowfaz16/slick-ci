# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
#COPY package*.json ./

# Copy the rest of your application's code
COPY . .

# Install dependencies
# Note: Using --production to avoid installing devDependencies
RUN npm install

# Compile TypeScript to JavaScript
RUN npm run build-server
RUN npm install tsx -g

# Your application's default port
EXPOSE 3000

# Command to run your app
CMD ["tsx", "src/slickci-runner"]
