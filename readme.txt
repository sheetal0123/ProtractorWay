#Installation Steps:
1. install node/npm from .msi file | https://nodejs.org/en/download/
 verify node/npm version
 node -v		8.11.3	
 npm -v	 		6.1.0
 
2. install selenium webdriver
3. npm install -g protractor    |  install protractor
protractor --version		5.3.2

npm install -g jasmine
jasmine -v

npm install --save @types/jasmine 			|    package to sync jasmine and typescript

4. webdriver-manager update    
webdriver-manager update --ignore_ssl   | if error comes in above stmt

Note: Imp: Restart system if above setup does not work
Webdriver Manager listen to any tests which run via protractor.


#How to Run:
1. webdriver-manager start										| standard way
   webdriver-manager start --versions.chrome 2.38             	| in case we want to run on particular chrome driver
   
   verify @ http://localhost:4444/wd/hub/static/resource/hub.html
   
2. protractor conf1.js

3. note:
ChromeDriver 2.41   Supports Chrome v67-69
ChromeDriver 2.38   Supports Chrome v65-67  


#Few imp commands
webdriver-manager version
webdriver-manager shutdown
webdriver-manager clean
webdriver-manager update --ignore_ssl # bypass network proxy
webdriver-manager start 
node webdriver-manager status

#Some Imp Paths:
C:\Users\exxxxxx\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_2.41.zip
C:\Users\exxxxxx\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\chromedriver_2.38.zip
C:\Users\exxxxxx\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone-3.14.0.jar
C:\Users\exxxxxx\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver-v0.21.0.zip
C:\Users\exxxxxx\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\built\config.json

#Errors:
whttps://stackoverflow.com/questions/9626990/receiving-error-error-ssl-error-self-signed-cert-in-chain-while-using-npm
https://github.com/angular/webdriver-manager/issues/239



#Index
AngularJS : Original Angular language, also called Angular1 - Obsolete
Angular2  : Also called Angular. Currently most popupar. Made in Typescript.
Angular4  : Latest Angular but not widely used.

#Angular app 
-can be tested using Protractor(frontend) and Karma (API services)
-cross platform, easy to develop

#To develop Angular App
Node
VSCode editor
HTML knowledge

#Angular CLI
npm install -g @angular/cli   |  https://github.com/angular/angular-cli/wiki
using angular cli we can build angular site very fast

#Angular Info
Angular application = Made of Components
Components : HTML + CSS + Component Class
Component Class: Control a portion of screen


#Jasmine
-Protractor using Jasmine for its testing interface hence Jasmine is imp for Protractor learning
-Jasmine is a kind of BDD where we describe behaviour in step file directly i.e no story file
npm install -g jasmine
-describe and it are jasmine global functions
-'describe' can contains multiple 'it' func, further 'it' can contains 'describe'



1. Config and Spec file
Configuration file: This file constains info related to test case files i.e. specs.js and to talk with Selenium server (Selenium Address). 
Chrome is the default browser for Protractor.
Spec file: Spec file contains the logic and locators to interact with the web application.



#imp links : todo
https://www.npmjs.com/package/jasmine-ts
https://github.com/angular/protractor/tree/5.4.0/exampleTypescript
http://www.protractortest.org/#/page-objects
https://github.com/angular/protractor/tree/master/exampleTypescript
http://www.webdriverjs.com/protractor-example-with-typescript/
https://www.guru99.com/protractor-testing.html















