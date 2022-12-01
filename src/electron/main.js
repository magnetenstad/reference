const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { File } = require('virtual-file-system');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 480,
    minHeight: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: 'black',
      symbolColor: 'white',
    },
  });
  win.loadFile('dist/index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.handle('read-file', (_event, path) => {
  console.log(`Try read-file ${path}`);
  return File.read(path);
});

ipcMain.handle('write-file', (_event, { path, data }) => {
  console.log(`Try write-file ${path}`);
  const file = File.read(path);
  file.data = data;
  return file.write();
});
