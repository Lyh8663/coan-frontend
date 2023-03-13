const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
function sendEmailCode(){
	var email = document.getElementById('email').value; // 获取指定 id 的内容
	console.log("用户登录的email为" + email);
	//以后要调用一下后台的发送验证码接口
} 
function login(){
	console.log("登录");
	var email = document.getElementById('email').value;
	var code = document.getElementById('code').value;
	if(email=='123@qq.com'&&code=='123456'){//后门
		window.open("index.html");
		window.close("LoginAndRegist.html");
		console.log("登录成功");
	}
}