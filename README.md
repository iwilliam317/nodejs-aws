# nodejs-bootstrap

## Bootstrap EC2 instance
Copy and paste in EC2 user data
```
#!/bin/bash
apt-get update -y
apt-get install nodejs npm -y
git clone https://username:password@github.com/username/repository.git 
cd nodejs-bootstrap
npm install
npm start
 ```