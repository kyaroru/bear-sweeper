## BearSweeper
![Brownie](./src/Brownie.svg)

Welcome, this game was originally built using React Native & now porting to Electron + ReactJS

- Link to Original Repo: [BearSweeper](https://github.com/kyaroru/BearSweeper)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo for ReactJS Website
Link to Demo Website: [BearSweeper](https://bearsweeper.kyaroru.com)
![Demo Website](http://g.recordit.co/CXfIGuw4gq.gif)

## Demo for Electron App
![Demo App](http://g.recordit.co/0DQ6WqLwKJ.gif)

## Prerequisite
- Install Foreman
```console
sudo npm i -g foreman
```

## Clone and Setup
```console
git clone https://github.com/kyaroru/bear-sweeper.git
cd bear-sweeper
npm i
```

## Start & Run in Browser
```console
npm start
```

## Start & Run Electron App
```console
npm run start-app
```

## Build & Deploy
```console
npm run mas-dev (for MacOS - development version for Mac App Store) --- CERT & PROVISIONING NEEDED
npm run mas (for MacOS - distribute via Mac App Store) --- CERT & PROVISIONING NEEDED
npm run dmg (for MacOS - distribute outside Mac App Store)
npm run appx (for Windows - distribute via Windows Store) --- PUBLISHER ACCOUNT NEEDED
npm run win (for Window - distribute outside Windows store)
```
