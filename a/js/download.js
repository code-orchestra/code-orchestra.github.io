function download_COLT(){
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
    var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
    var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

    if(isMac){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/COLT.dmg");
    }else if(isWindows){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/COLT-install.exe");
    }else if(isLinux){
        //window.location.replace("http://codeorchestra.com/files/colt_linux.tg");
        alert("Linux not support yet. Coming soon");
    }
}

function download_co2(){
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
    var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
    var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

    if(isMac){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-mac.zip");
    }else if(isWindows){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-win.exe");
    }else if(isLinux){
        window.location.replace("https://codeorchestra.s3.amazonaws.com/CO2-linux.tar.gz");
    }
}