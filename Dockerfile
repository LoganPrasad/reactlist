#pull the offical node image
FROM node:12.18.3

# set working directory
WORKDIR /app



# install app dependencies
COPY package.json ./

RUN npm install --silent


# add app
COPY . ./

EXPOSE 8080
# start app
CMD ["npm", "start"]