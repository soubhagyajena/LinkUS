---------------------BACKEND---------------
1. npm init
entry point app.js
"start": "node app"


2. npm i --save express mongoose body-parser
   npm i --save cors passport jsonwebtoken bcryptjs passport-jwt


3. npm install -g nodemon


---------------------FRONTEND---------------
1. npm install -g @angular/cli (latest 10/3/2017)
How to update: "npm uninstall --save-dev angular-cli"
	       "npm install --save-dev @angular/cli@latest"


2. ng new angular-src
(in myshifu)

(in angular-src doc)
3. ng serve (same fn as npm start)

(in src/app/components)
4. ng g component navbar

(still in component folder)
5. ng g component login
6. ng g component home
7. ng g component dashboard
8. ng g component profile
9. ng g component register

(in service folder)
10. ng g component validate

(in angular-src folder)
11. npm install angular2-flash-messages --save
12. npm install angular2-jwt --save

NOTE!!!
make sure in angular-cli.json the "outDir": "../public" so it goes right into public folder
13.ng build
then could access project through port 3333(for this case)
instead of port 4200


(in service folder)
12. ng g service auth