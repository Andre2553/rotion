import {ipcMain} from 'electron';

ipcMain.on('fetch-documents', (event, arg) => {
  console.log(arg); // prints "ping"
  event.reply('fetch-documents', 'pong');
});