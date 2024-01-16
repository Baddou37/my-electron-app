const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // frame: false, // ===> Pour enlever la barre de titre
    // fullscreen: true, // ===> Pour lancer en plein écran
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
};

app.on("window-all-closed", () => {
  // if (process.platform !== "darwin") app.quit(); // ===> Si je veux fermer sur linux ou windows mais pas sur mac
  app.quit();
});

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
