const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
        },
    });

    // ใช้ path แบบ absolute โดยการหาตำแหน่งจาก process.cwd()
    const indexPath = path.join(process.cwd(), 'build', 'index.html');
    console.log('Loading index.html from:', indexPath);
    win.loadFile(indexPath);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
