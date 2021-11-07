# Koa2-mssql-migration-ts
 a backend structure using koa2 and typescript

## Required

Nodejs >= 14.4.0 (Using async/await)

## Global Package


### command

```bash
# copy to config.js
cp src/config.js.example src/config.js

# eslint
npm run lint

# test
npm run test

# migration
npm run migrate
npm run migrate-undo
npm run migrate-undo-all

# run as production (pm2)
npm start
```