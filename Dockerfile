FROM node:19-alpine

USER root
RUN apk update && apk add aws-cli
LABEL maintainer="somit srivastava <corp@wealthy.in>"

ENV PROJECT_DIR=/user/src/app

ENV LOG_DIR=/var/log/wealthy/app

WORKDIR $PROJECT_DIR
COPY ./entrypoint.sh $PROJECT_DIR/
RUN chmod +x $PROJECT_DIR/entrypoint.sh

COPY . $PROJECT_DIR/

EXPOSE 9000
EXPOSE 80

CMD ["sh","./entrypoint.sh"]