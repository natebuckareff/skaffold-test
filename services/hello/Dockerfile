FROM node:12.12-alpine
WORKDIR /opt/mg/hello
EXPOSE 80
COPY . .
RUN yarn install --frozen-lockfile
CMD ["yarn", "dev"]