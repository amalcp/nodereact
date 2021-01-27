FROM node:12.13.0-alpine AS alpine
WORKDIR /app
# ENV MONGO_URI=mongodb://admin:admin@192.168.33.12:27017
# ENV MONGO_DB=test
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 5000


CMD ["npm", "start"]
