# Use an Wealthy alpine node image as the base image
FROM node:19-alpine

MAINTAINER somit srivastava "corp@wealthy.in"

# Set the working directory in the container
WORKDIR /user/src/app

COPY .env.local .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Accept environment variables from entrypoint.sh

# Start the Next.js application
ENTRYPOINT ["npm", "run", "dev"]
