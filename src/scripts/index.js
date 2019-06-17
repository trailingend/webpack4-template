import { retrieveWindowWidth, 
         retrieveWindowHeight, 
         checkIfDesktopToMobile, 
         checkIfMobileToDesktop, 
         testPlatform } from './utils';

const widthLimit = 960;
let platform;
let winW, winH;


window.addEventListener('load', (event) => {
    platform = testPlatform();
    winW = retrieveWindowWidth(platform);
    winH = retrieveWindowHeight(platform);
    console.log('=== On Init ===: (' + winW + ", " + winH + ")");

    // ================ Main content goes here =================

    // ================ Main content ends here =================

    if (winW <= widthLimit) {
        // ================ Mobild resize calls go here =================

        // ================ Mobild resize calls go here =================
    }
});

window.addEventListener('resize', (event) => {
    const newWinW = retrieveWindowWidth(platform);
    const newWinH = retrieveWindowHeight(platform);
    const ifDToM = checkIfDesktopToMobile(winW, newWinW, widthLimit);
    const ifMToD = checkIfMobileToDesktop(winW, newWinW, widthLimit);
    winW = newWinW;
    winH = newWinH;
    console.log('=== On Resize ===: (' + newWinW + ", " + newWinH + ")");

    if (ifDToM || ifMToD) {
        // ================ Resize calls go here =================

        // ================ Resize calls go here =================
    }
});
