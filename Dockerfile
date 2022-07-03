FROM node:16-alpine as development

WORKDIR /app

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm ci

COPY src/ src/

RUN npm run build

FROM node:16-alpine as production

ARG APP_MONGO_USERNAME

ARG APP_MONGO_PASSWORD

ARG APP_SUPER_SECRET_KEY

ENV PORT=5000

ENV MONGO_USERNAME=$APP_MONGO_USERNAME

ENV MONGO_PASSWORD=$APP_MONGO_PASSWORD

ENV SUPER_SECRET_KEY=$APP_SUPER_SECRET_KEY

EXPOSE ${PORT}

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=development /app/dist/ ./dist/


RUN adduser -S client &&  \
    chown client: /app && chmod 700 /app

USER client

CMD [ "node", "dist/main.js" ]