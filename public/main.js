const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // โหลด React App ที่ถูก build แล้ว
    win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(createWindow);
