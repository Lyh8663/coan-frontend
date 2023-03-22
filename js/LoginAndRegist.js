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
				// alert("Login was successful!");
				window.sessionStorage.setItem("userinfo",res.data.userInfo);
				console.log(res.data.userInfo);
				// window.open("index.html");
				// window.close("LoginAndRegist.html");
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