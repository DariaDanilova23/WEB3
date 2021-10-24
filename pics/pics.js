localStorage.setItem("Фотоальбом", "+");
setCookie('Фотоальбом','',12);

function setCookie(name, value, days){
	var date = new Date;
	date.setDate(date.getDate()+days);
	value=encodeURIComponent(value);
	document.cookie=name+"="+value+";path=/; expires="+date.toUTCString();
};

function showPic(pic){
let div = document.createElement('div');
div.className="createdDiv";
div.innerHTML =("<img src='"+pic.src+"'>");
document.body.append(div);
}
