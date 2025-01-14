FROM node:23-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN echo "Installing shared dependencies" && \
  npm install

COPY . .

# Expose the necessary port for the app (adjust if needed)
EXPOSE 3001

CMD [ "npm", "run", "test" ]