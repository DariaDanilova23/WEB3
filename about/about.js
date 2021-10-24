localStorage.setItem("Обо мне","+");

setCookie('Обо мне','',12);

function setCookie(name, value, days){
	var date = new Date;
	date.setDate(date.getDate()+days);
	value=encodeURIComponent(value);
	document.cookie=name+"="+value+";path=/; expires="+date.toUTCString();
};
