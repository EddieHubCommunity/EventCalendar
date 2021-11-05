FROM node:14-alpine AS development

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install 

# add app
COPY . ./

EXPOSE 3000
# start app
CMD ["npm", "start"]