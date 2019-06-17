
export const retrieveWindowWidth = (platform) => {
    if( window.screen.width && ! platform.isDesktop){
        return window.screen.width;
    } else if (window.innerWidth) {
        return window.innerWidth;
    } else {
        return document.documentElement.clientWidth;
    }
}

export const retrieveWindowHeight = (platform) => {
    if( window.screen.width && ! platform.isDesktop){
        return window.screen.height;
    } else if ( window.innerHeight ){
        return window.innerHeight;
    } else {
        return document.documentElement.clientHeight;
    }
}

export const checkIfDesktopToMobile = (oldW, newW, widthLimit) => {
    return newW <= widthLimit && oldW > widthLimit;
}

export const checkIfMobileToDesktop = (oldW, newW, widthLimit) => {
    return newW > widthLimit && oldW <= widthLimit;
}

export const testPlatform = () => {
    const ua = window.navigator.userAgent.toLowerCase();
    const platform = {
        isAndroid412: ua.match(/android 4\.1\.2/i) !== null,
        isDuos: ua.match(/gt\-s7562/i) !== null,
        isI9300: ua.match(/gt\-i9300/i) !== null,
        isI9500: ua.match(/gt\-i9500/i) !== null,
        hasTouch: ('ontouchstart' in window),
        isiPod: ua.match(/ipod/i) !== null,
        isiPad: ua.match(/ipad/i) !== null,
        isiPhone: ua.match(/iphone/i) !== null,
        isAndroid: ua.match(/android/i) !== null,
        isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
        isIE: window.navigator.appName.indexOf("Microsoft") != -1,
        isIE10: ua.match(/msie 10/) !== null,
        isIE11: ua.match(/trident.*rv\:11\./) !== null,
        isEdge: ua.indexOf('edge/')>0,
        isChrome: ua.match(/Chrome/gi) !== null,
        isFirefox: ua.match(/firefox/gi) !== null,
        isSafari: ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1,
        isWebkit: ua.match(/webkit/gi) !== null,
        isGecko: ua.match(/gecko/gi) !== null,
        isOpera: ua.match(/opera/gi) !== null,
        isMac: ua.match('mac') !== null,
        isIOS8: ua.match(/(iphone|ipod|ipad).* os 8_/) !== null,
        isIOS10: ua.match(/(iphone|ipod|ipad).* os 10_/) !== null,
        supportsSvg: !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    }
    platform.isMobile = platform.isiPhone || platform.isAndroid;
    platform.isTablet = platform.isiPad;
    platform.isDesktop = !(platform.isMobile || platform.isTablet);
    platform.isIE = platform.isIE10 || platform.isIE11 || platform.isEdge;
    platform.isIos = platform.isiPhone || platform.isiPad;
    window.platform = platform;
    return platform;
}