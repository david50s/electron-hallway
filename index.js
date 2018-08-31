const electron = require('electron');
// const electronLocalshortcut = require('electron-localshortcut');

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

// electronLocalshortcut.register(mainWindow, 'F12', () => {
//     mainWindow.webContents.openDevTools();
// });

// electronLocalshortcut.register(mainWindow, 'F5', () => {
//     mainWindow.webContents.reload();
// });

// F12 to open dev tools, F5 to reload
// mainWindow.document.addEventListener("keydown", function (e) {
//     if (e.which === 123) {
//         require('remote').getCurrentWindow().toggleDevTools();
//     } else if (e.which === 116) {
//         location.reload();
//     }
// });
app.on('window-all-closed', function () {
    app.quit();
    
  })


