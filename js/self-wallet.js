//登录页需要补充如下逻辑，有不执行nav中onload的bug
if(window.sessionStorage.getItem("username")!=null){
	console.log("用户已登录")
	var nav_usernameArea = document.getElementById("nav-usertitle");
	if(window.sessionStorage.getItem("username").length>=5){
		nav_usernameArea.innerHTML = window.sessionStorage.getItem("username").slice(0,5) + "...";//省略写法
	}else{
		nav_usernameArea.innerHTML = window.sessionStorage.getItem("username");//非省略写法
	}
	var usernameArea = document.getElementById("name");
	usernameArea.innerHTML = window.sessionStorage.getItem("username");
	var useridArea = document.getElementById("id");
	var idHTML = "uID:" + window.sessionStorage.getItem("userId")
	useridArea.innerHTML = idHTML;
}