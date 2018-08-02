const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;


app.on('ready', () => {
    //mainWindow = new BrowserWindow ({});
    mainWindow = new BrowserWindow ({frame: false, fullscreen: true});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

function createAddWindow() {
    addWindow = new BrowserWindow ({
        
    });
}


