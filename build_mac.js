var nativefier = require('nativefier').default;

// nativefier https://app.cinny.in/ --single-instance --file-download-options '{"saveAs": true}' --browserwindow-options '{"webPreferences": { "webviewTag": true, "nodeIntegration": true, "nodeIntegrationInSubFrames": true, "nativeWindowOpen": true } }' --user-agent firefox --internal-urls "app\.cinny\.*?" --app-version 1.0.0 -p linux --conceal
var options = {
    name: "Cinny Desktop",
    targetUrl: "https://app.cinny.in/",
    platform: "mac",
    arch: "x64",
    appVersion: "1.1.0",
    overwrite: true,
    asar: false,
    icon: "./icons/icon.icns",
    counter: true,
    bounce: true,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    ignoreCertificate: false,
    disableGpu: true,
    ignoreGpuBlacklist: false,
    enableEs3Apis: false,
    internalUrls: 'app\.cinny\.*?',
    blockExternalUrls: false,
    darwinDarkModeSupport: true,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: true,
    clearCache: false,
    tray: true,
    fileDownloadOptions: {
        saveAs: true,
    },
    browserwindowOptions: {
        webPreferences: {
            webviewTag: true,
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nativeWindowOpen: true
        }
    }

}

nativefier(options, function (error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});