// Why doesnt this work?? Please buttons work AAAAAAAAAAAAAAAA

var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
// This code breaks the entire thing:
// const {BrowserWindow} = require('electron').BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});
  mainWindow.loadURL('file://' + __dirname + '/home.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
