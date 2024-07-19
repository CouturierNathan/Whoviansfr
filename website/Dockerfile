FROM node:latest

WORKDIR /app

COPY . /app

COPY package*.json /app

RUN npm install

EXPOSE 3000

COPY init.sh /app/init.sh
RUN chmod +x /app/init.sh

CMD ["/app/init.sh"]

