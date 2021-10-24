/*const element=document.getElementsByClassName('wall');
 for(i=0;i<element.length;i++){
	 element[i].addEventListener('click',showPic);
 }*/
 
localStorage.setItem("Фотоальбом", "+");

function showPic(pic){
let div = document.createElement('div');
div.className="createdDiv";
div.innerHTML =("<img src='"+pic.src+"'>");
document.body.append(div);
}