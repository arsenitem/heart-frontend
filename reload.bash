pkill screen
screen -d -m -S  app
bash -c 'echo 'reloading app'
git pull
fuser -k 3006/tcp
npm run start
echo 'building app in background''