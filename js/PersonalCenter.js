//登录以后，显示用户头像
window.onload = function(){
	// console.log(window.sessionStorage.getItem("username"));
	var username = window.sessionStorage.getItem("username");//获取到userInfo
	if(username == null){
		console.log("用户尚未登陆");
	}
	if(username != null){//如果userInfo不为null，说明已经登录
		let usernameArea = document.getElementById("pc_username");
		if(username.length>=5){
			usernameArea.innerHTML = username;//省略写法
		}else{
			usernameArea.innerHTML = username;//非省略写法
		}
		console.log(usernameArea.innerHTML);
	}
	
	// console.log(window.sessionStorage.getItem("username"));
	var username = window.sessionStorage.getItem("username");//获取到userInfo
	if(username == null){
		console.log("用户尚未登陆");
	}
	if(username != null){//如果userInfo不为null，说明已经登录
		let usernameArea = document.getElementById("nav-usertitle");
		if(username.length>=5){
			usernameArea.innerHTML = username.slice(0,5) + "...";//省略写法
		}else{
			usernameArea.innerHTML = username;//非省略写法
		}
		console.log(usernameArea.innerHTML);
		
		//修改用户头像，目前由于用户暂时没有头像，因此先不进行修改
		// let userheadArea = document.getElementById("userheadPic");
	}
}