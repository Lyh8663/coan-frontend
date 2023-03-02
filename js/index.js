//给主按钮添加鼠标经过效果
let entryButton = document.getElementById("entryButton");
	entryButton.onmouseover = function(){
	entryButton.className = 'entryButtonChosen';
}
entryButton.onmouseout = function(){
	entryButton.className = 'entryButton';
}