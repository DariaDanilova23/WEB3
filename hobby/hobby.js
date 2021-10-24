 localStorage.setItem("Хобби","+");
 const element=document.getElementsByClassName('menu-item');
 for(i=0;i<element.length;i++){
	 element[i].addEventListener('click',showMenu);
	 element[i].addEventListener('mouseout',hideMenu);
 }
 
 function showMenu(){
	 if (this.children.length>1){
		 this.children[1].style.height='auto';
		 this.children[1].style.opacity='1';
		 this.children[1].style.overflow='visible';
	 }
 }
 
  function hideMenu(){
	 if (this.children.length>1){
		 this.children[1].style.height='0';
		 this.children[1].style.opacity='0';
		 this.children[1].style.overflow='hidden';
	 }
 }
 
/*setCookie("Мои интересы", "1", 21);
 //document.cookie="Мои интересы; epires=Thu, 21 oct 2021 13:00:00 UTC; path=/";
function setCookie(name, value, days){
	var date = new Date;
	date.setDate(date.getDate()+days);
	value=encodeURIComponent(value);
	document.cookie=name+"="+value+";path=/; expires"+date.toUTCString();
};*/
