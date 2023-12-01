# Use an Wealthy alpine node image as the base image
FROM node:19-alpine

MAINTAINER somit srivastava "corp@wealthy.in"

# Set environment variables


# Set the working directory in the container
WORKDIR /user/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app will run on
# Expose the port that the app will run on
EXPOSE 9008


# Start the Next.js application
CMD ["npm", "run", "start"]