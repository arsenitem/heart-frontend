screen -r app
echo 'reloading app'
git pull
fuser -k 3006/tcp
npm run start
screen -d

