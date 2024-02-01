const { app, BrowserWindow } = require('electron');

var mainWindow = null;
async function createWindow(){
    mainWindow = new BrowserWindow({
        widht: 400,
        height: 600
    });

    await mainWindow.loadFile('src/pages/login/index.html')
}


//on ready
app.whenReady().then(createWindow);