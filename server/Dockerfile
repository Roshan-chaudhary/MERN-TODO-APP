# Use an official Node.js runtime as a parent image : Alpine Help Reduce image Size 
FROM node:20-alpine   


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Set the environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5500

# Command to run the application
CMD ["npm", "start"]
