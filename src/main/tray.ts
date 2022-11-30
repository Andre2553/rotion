import { app, Menu, Tray, nativeImage, BrowserWindow } from "electron";
import path from "node:path";

export function createTray(window: BrowserWindow) {
    const icon = nativeImage.createFromPath(
      path.resolve(__dirname, "rotionTemplate.png")
    );
    const tray = new Tray(icon);

    const menu = Menu.buildFromTemplate([
      { label: "Rotion", enabled: false },
      { type: "separator" },
      {
        label: "Create New Document",
        click: () => {
          window.webContents.send("new-document");
        },
      },
      { type: "separator" },
      { label: "Recent Documents", enabled: false, accelerator: "CmdOrCtrl+1" },
      { label: "Quit", click: () => app.quit() },
    ]);
    tray.setContextMenu(menu);
}
