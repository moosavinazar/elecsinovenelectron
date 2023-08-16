const {app, BrowserWindow} = require('electron');


app.on('ready', function () {

    let mainWin = new BrowserWindow({
        //frame: false,
        show: false,
        width:1280,
        height: 800});

    let splashScreen = new BrowserWindow({
        transparent: true,
        width: 800,
        height: 200,
        frame: false
    })

    mainWin.on('closed' , () => {
        app.quit();
        mainWin = null;
    })

    splashScreen.on('closed' , () => splashScreen = null );

    splashScreen.loadFile('splash.html');
    splashScreen.center();

    setTimeout(function (){
        mainWin.loadURL('http://localhost:8080/');
        splashScreen.close();
        mainWin.center();
        mainWin.show()
    }, 10000)
})
