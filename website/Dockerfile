FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

COPY ./init.sh /usr/local/bin/init.sh

RUN chmod +x /usr/local/bin/init.sh

ENTRYPOINT ["init.sh"]

EXPOSE 3000

CMD ["npm", "start"]
