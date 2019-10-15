# nodejs-bootstrap
Simple NodeJS application that shows server's IP. 

## Use cases
Ideal for testing containers and checking traffic distribution with a load balancer

## Bootstrap EC2 instance
Copy and paste in EC2 user data
```
#!/bin/bash
apt-get update -y
apt-get install nodejs npm -y
git clone https://github.com/iwilliam317/nodejs-bootstrap.git
cd nodejs-bootstrap
npm install
npm start
 ``` 
