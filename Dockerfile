FROM node:19
WORKDIR /app
COPY Backend/package*.json ./ 
RUN npm install 
COPY . .
EXPOSE 3000
CMD [ "node", "Backend/src/App.js" ]