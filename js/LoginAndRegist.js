const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
// registerlink.addEventListener('click',()=>{
//     loginsec.classList.add('active')
// })
// loginlink.addEventListener('click',()=>{
//     loginsec.classList.remove('active')
// })
function sendEmailCode(){
	var email = document.getElementById('email').value; // 获取指定 id 的内容
	if(email==''){
		alert("请输入邮箱");
		return;
	}
	// console.log("用户登录的email为" + email);
	//以后要调用一下后台的发送验证码接口
	$.ajax({
		url: "http://101.34.23.125:8100/sendEmailCode",
	    type: "get",
		data:{
			email:email
		},
        dataType: "json",
	    success: function(data){
	        alert("Email verification code has been sent.")
	    },
	    error: function(msg){
	        // alert("ajax连接异常："+msg);
	    }
	});
} 
function login(){
	// console.log("登录");
	var email = document.getElementById('email').value;
	var code = document.getElementById('code').value;
	if(email=='123@qq.com'&&code=='123456'){//后门
		// window.open("index.html");
		// window.close("LoginAndRegist.html");
		location.href="index.html";
		console.log("登录成功");
		return;
	}
	if(code==''){
		alert("The verification code has not been entered yet.");
		return;
	}
	console.log("正在发起请求")
	$.ajax({
		url: "http://101.34.23.125:8100/emailLogin",
	    type: "post",
		data:{
			email:email,
			code:code
		},
	    dataType: "json",
	    success: function(res){
			// alert("发起登录请求");
			console.log(res);
			console.log("请求发起成功");
			if(res.success){
				window.sessionStorage.setItem("userinfo",res.data.userInfo);
				window.sessionStorage.setItem("username",res.data.userInfo.username);
				window.sessionStorage.setItem("userId",res.data.userInfo.id);
				if(res.data.isFirstLogin){//如果第一次登录，则需要实名认证
					location.href="RealNameAuthentication.html";
					alert("welcome! Dear "+ res.data.userInfo.username);
				}
				location.href="RealNameAuthentication.html";
				/*
				"userInfo": {
				            "id": 1638489971167010817,
				            "username": "e_1005772685@qq.com",
				            "phone": null,
				            "email": "1005772685@qq.com",
				            "registTime": "2023-03-22 18:37:05"
				        },
				*/
				alert("welcome! Dear "+ res.data.userInfo.username);
				location.href="index.html";
			}
			else{
				alert("Email or verification code error.");
			}
	    },
	    error: function(msg){
	        alert("ajax连接异常："+msg);
	    }
	});
}