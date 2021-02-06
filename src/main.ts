import {Application} from './application';
import {app} from 'electron';

// Reload the electron app on file changes!
require('electron-reload')(__dirname);

let application = new Application();

app.on('ready', application.OnReady.bind(application));
app.on('activate', application.OnActivate.bind(application));
app.on('window-all-closed', application.OnAllWindowsClosed.bind(application));