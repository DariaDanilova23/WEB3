let storage = document.querySelector('tbody.LS');
let cookieStore = document.querySelector('tbody.Cookie');
let cookiesArray = document.cookie.split(';');
for(let key in localStorage) {
   if (!localStorage.hasOwnProperty(key)) {
        continue;
    }
    let tr = document.createElement('tr');
tr.innerHTML = ("<tr>"+key+localStorage.getItem(key)+"</tr>");
    storage.append(tr);
}

var cookies = get_cookies_array();
for(var name in cookies) {
  document.write( name + " : " + cookies[name] + "<br />" );
}

function get_cookies_array() {
    var cookies = { };
    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }
    return cookies;  
}
/*
setCookie('name','+',12);

let tr2 = document.createElement('tr');
tr2.innerHTML = getCookie("Мои интересы");
cookieStore.append(tr2);

function setCookie(name, value, days){
	var date = new Date;
	date.setDate(date.getDate()+days);
	value=encodeURIComponent(value);
	document.cookie=name+"="+value+";path=/; expires="+date.toUTCString();
	var cookie_date = new Date();
	cookie_date.setYear(cookie_date.getFullYear() + 1);
	document.cookie = "name=user; path=/ expires=" + cookie_date.toUTCString();
};

function getCookie(name){
	var matches=document.cookie.match(new RegExp("(?:^|;)"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+ "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]):undefined;
};

function allCookie(){
	let cookiesArray = document.cookie.split(';');
	for (let cookie of cookiesArray) {
		let tr2 = document.createElement('tr');
		tr2.innerHTML = cookie;
		cookieStore.append(tr2);
}
}


*/
