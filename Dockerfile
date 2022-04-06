FROM node
LABEL name='vue-backup'
LABEL vuersion='0.0.1'
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm run start
