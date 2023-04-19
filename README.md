# discord-bot-playground
playing around with discord bot stuff

## Setting up the bot in Discord
* go to https://discord.com/developers/applications
* create a new application 
* Go to Bot
* Select Reset Token in order to recieve bot token
* Under Authorization flow 
* deselect Public Bot - to keep bot private
* Scroll to "message Content Intent" select this in order for test code to work. this allows bot to read messages written in a channel

## Adding Bot to Server
* Navigate to OAuth2
* Select URL Generator
* Select Bot
* a Bot permissions list will open
* select the required bot permissions ( use admin to just select all - easiest to just get something running)
* copy the generated URL from the bottom of the page into a browser.
* follow the steps to add to a server

## Running Application 

make sure node is installed on your system ( minimum v16.9 )
for a node version manager ```use npm n``` or ```npm nvm``` for windows

* Navigate to root of this directory 
* ```npm install``` this will install all dependencies locally on your machine
* Add a token file to the root directory, this should be ```.json``` file named ```token.json``` and the contents should follow this format :
```{ token : "your-key-here "}```
* this is not saved to the repo for safety reasons.
* to run the file use ```node index.js```
* the application will print to console if connection is a success. 

