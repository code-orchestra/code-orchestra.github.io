

function download_COLT(){
	var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

	if(isMac){
		window.location.replace("http://codeorchestra.com/files/COLT.dmg");
	}else if(isWindows){
		window.location.replace("http://codeorchestra.com/files/COLT-install.exe");
	}else if(isLinux){
		//window.location.replace("http://codeorchestra.com/files/colt_linux.tg");
		alert("Linux not support yet. Coming soon")
	}
}