const electron = require("electron");

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 900, 
        height: 680,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: false,
            preload: path.resolve(`${__dirname}/preload.js`),
            webSecurity: false
        }
    });
    mainWindow.loadURL(isDev? "http://localhost:3000": `file://${path.join(__dirname, "../build/index.html")}`);
    mainWindow.on("closed", () => (mainWindow = null));
}

app.commandLine.appendSwitch('disable-site-isolation-trials')
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => 
{
    if (mainWindow === null) {
        createWindow();
    }
});