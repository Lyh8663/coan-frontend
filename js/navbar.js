let nav_menuItem0 = document.getElementById("nav-menuItem0");
let nav_menuItem1 = document.getElementById("nav-menuItem1");
let nav_menuItem2 = document.getElementById("nav-menuItem2");
let nav_menuItem3 = document.getElementById("nav-menuItem3");
let nav_COANLogo = document.getElementById("COANLogo")
let nav_COANTitle = document.getElementById("COANTitle");
let nav_userhead = document.getElementById("userhead");
let nav_usertitle = document.getElementById("usertitle");
let nav_ContactLogo = document.getElementById("ContactLogo");
nav_menuItem0.onmouseover = function(){
	nav_menuItem0.className = 'nav-menuItemChosen';
}
nav_menuItem0.onmouseout = function(){
	nav_menuItem0.className = 'nav-menuItem';
}
nav_menuItem1.onmouseover = function(){
	nav_menuItem1.className = 'nav-menuItemChosen';
}
nav_menuItem1.onmouseout = function(){
	nav_menuItem1.className = 'nav-menuItem';
}
nav_menuItem2.onmouseover = function(){
	nav_menuItem2.className = 'nav-menuItemChosen';
}
nav_menuItem2.onmouseout = function(){
	nav_menuItem2.className = 'nav-menuItem';
}
nav_menuItem3.onmouseover = function(){
	nav_menuItem3.className = 'nav-menuItemChosen';
}
nav_menuItem3.onmouseout = function(){
	nav_menuItem3.className = 'nav-menuItem';
}

//点击跳转
// menuItem0.addEventListener("click", function(){
//     window.location.href="NFTTransactions.html";
// });

nav_menuItem1.addEventListener("click", function(){
    window.location.href="GameAssetTrading.html";
});

nav_menuItem2.addEventListener("click", function(){
    window.location.href="COANDaily.html";
});

nav_menuItem3.addEventListener("click", function(){
    window.location.href="COANSpace.html";
});

nav_COANLogo.addEventListener("click", function(){
    window.location.href="index.html";
});

nav_COANTitle.addEventListener("click", function(){
    window.location.href="index.html";
});
		
nav_userhead.addEventListener("click", function(){
    window.location.href="LoginAndRegist.html";
});

nav_usertitle.addEventListener("click", function(){
    window.location.href="LoginAndRegist.html";
});

nav_ContactLogo.addEventListener("click", function(){
    window.location.href="ContactUs.html";
});
