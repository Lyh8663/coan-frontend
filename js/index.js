//给主按钮添加鼠标经过效果
let entryButton1 = document.getElementById("entryButton1");
	entryButton1.onmouseover = function(){
	entryButton1.className = 'entryButtonChosen';
}
entryButton1.onmouseout = function(){
	entryButton1.className = 'entryButton1';
}
entryButton1.onclick = function(){
	window.location.href = 'LoginAndRegistZH.html';
}
