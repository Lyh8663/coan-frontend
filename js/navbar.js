let menuItem0 = document.getElementById("menuItem0");
let menuItem1 = document.getElementById("menuItem1");
let menuItem2 = document.getElementById("menuItem2");
let menuItem3 = document.getElementById("menuItem3");
let COANLogo = document.getElementById("COANLogo")
let COANTitle = document.getElementById("COANTitle");
let userhead = document.getElementById("userhead");
let usertitle = document.getElementById("usertitle");
let ContactLogo = document.getElementById("ContactLogo");
menuItem0.onmouseover = function(){
	menuItem0.className = 'menuItemChosen';
}
menuItem0.onmouseout = function(){
	menuItem0.className = 'menuItem';
}
menuItem1.onmouseover = function(){
	menuItem1.className = 'menuItemChosen';
}
menuItem1.onmouseout = function(){
	menuItem1.className = 'menuItem';
}
menuItem2.onmouseover = function(){
	menuItem2.className = 'menuItemChosen';
}
menuItem2.onmouseout = function(){
	menuItem2.className = 'menuItem';
}
menuItem3.onmouseover = function(){
	menuItem3.className = 'menuItemChosen';
}
menuItem3.onmouseout = function(){
	menuItem3.className = 'menuItem';
}

//点击跳转
// menuItem0.addEventListener("click", function(){
//     window.location.href="NFTTransactions.html";
// });

menuItem1.addEventListener("click", function(){
    window.location.href="GameAssetTrading.html";
});

menuItem2.addEventListener("click", function(){
    window.location.href="COANDaily.html";
});

menuItem3.addEventListener("click", function(){
    window.location.href="COANSpace.html";
});

COANLogo.addEventListener("click", function(){
    window.location.href="index.html";
});

COANTitle.addEventListener("click", function(){
    window.location.href="index.html";
});
		
userhead.addEventListener("click", function(){
    window.location.href="LoginAndRegist.html";
});

usertitle.addEventListener("click", function(){
    window.location.href="LoginAndRegist.html";
});

ContactLogo.addEventListener("click", function(){
    window.location.href="ContactUs.html";
});
