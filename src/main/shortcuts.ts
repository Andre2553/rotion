import { app, BrowserWindow, globalShortcut } from "electron";

export function createShorcuts(window: BrowserWindow){
   app.on('browser-window-focus', () => {
      globalShortcut.register('CommandOrControl+N', () => {
         window.webContents.send('new-document');
      })
   })
   app.on('browser-window-blur', () => {
      globalShortcut.unregisterAll()
   })

}