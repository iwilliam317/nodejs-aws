#!/bin/bash

# Install node.js
sudo yum update -y
sudo yum install nodejs -y

# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
sudo npm install forever -g

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete