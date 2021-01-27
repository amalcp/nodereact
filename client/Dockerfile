# FROM node:12.13.0-alpine as build 
# WORKDIR /app
# COPY package*.json ./
# RUN npm install 
# COPY . .
# RUN npm run build

# FROM nginx 
# EXPOSE 3000
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html
FROM node:14.13.1-alpine3.12 as builder
RUN apk add git curl
WORKDIR /app
COPY package*.json ./
RUN yarn install

COPY . ./

FROM node:14.13.1-alpine3.12
WORKDIR /app
# Copy app source
COPY --from=builder /app/ ./
CMD ["yarn", "start"]