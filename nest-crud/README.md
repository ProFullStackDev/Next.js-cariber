1. yarn  # install package
2. yarn run start:dev 
db: # iam hardcode src\database\ormconfig.ts
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'nest'

3. create user on localhost:3000/api/ there will be path POST api/users
payload 
{
  "email": "string",
  "password": "string"
}

4. for login and get bearer token 
Authentication 
POST /api/auth
payload
{
  "username": "string",
  "password": "string"
}

Noted : for command makemigration or migrate has some prob so i set 
synchronize: true, # auto sync table with model when run
dropSchema: false, # drop table all and recreate when run or chnage file
in src\database\ormconfig.ts