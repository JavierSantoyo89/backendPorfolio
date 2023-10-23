FROM node:18

RUN mkdir -p /home/app

COPY . C:\Projects

EXPOSE 1689

CMD ["node", "C:\Projects/backendPorfolio/src/index.ts"]