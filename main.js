const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        })

window.loadURL('https://broslunas.vercel.app')
}

app.whenReady().then(createWindow)