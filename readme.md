###Installation
1. Download the code
2. Configure the database access url for your Mongo in the file ./config/index.js
    1. For a development setup go to https://mlab.com/welcome/ and create an user.
    2. Create in **mlab.com** a mongodb database and an username, (allow writing privileges)
    3. Configure the ./config/index.js file with the credentials of the database created.
3. Install dependencies.
```shell
npm install
```
######Start your app
```shell
npm start
```
######Use api/place/ API.

- By default runs into http://localhost:3000/api/...
- node version v8.4.0
- npm version v5.3.0
