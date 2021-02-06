/*
 * Import app Module to control application life
 * Import BrowserWindow Module to create native browser window
*/
import {app, BrowserWindow} from 'electron';

export class Application
{
    // The '!' tells TypeScript the value will be assigned at runtime.
    private mainWindow! : Electron.BrowserWindow;

    // This method will be called when Electron has finished initialization.
    public OnReady(): void {
        this.CreateMainWindow();
    }

    public OnActivate(): void {
        // On OS X it's common to re-create a window in the app when the dock icon is clicked and
        // there are no other windows open.
        if(BrowserWindow.getAllWindows().length === 0) {
            this.CreateMainWindow();
        }
    }

    public OnAllWindowsClosed(): void {
        // Quit when all windows are closed.
        if(process.platform !== 'darwin') {
            app.quit();
        }
    }

    private CreateMainWindow(): void {
        // Create the browser window
        this.mainWindow = new BrowserWindow({
            width:800,
            height:600
        });

        // Load the index.html
        this.mainWindow.loadFile('view/index.html');

        // Emitted when the window is closed.
        this.mainWindow.on('closed', ()=>{
            // Dereference the window object
            this.mainWindow = null as any;
        });
    }
}