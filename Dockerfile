FROM node:12

# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/office-employee-front

# Installing dependencies
COPY office-employee-front/package*.json ./
RUN npm install

# Copying source files
# COPY . .

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]
