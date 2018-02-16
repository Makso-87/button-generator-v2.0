var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var cross = document.querySelectorAll('.cross');
var par = document.querySelectorAll('.tab');
var link = document.querySelectorAll('.bar');
par[0].style.transition = 'all 0.5s';
par[1].style.transition = 'all 0.5s';
par[2].style.transition = 'all 0.5s';
par[3].style.transition = 'all 0.5s';
function Slide1(){
	if(count1 % 2 == 0) {
		par[0].style.height = '180px'; 
		par[0].style.paddingTop = '10px'; 
		par[0].style.paddingBottom = '10px';
		par[1].style.height = '0px'; 
		par[1].style.paddingTop = '0px'; 
		par[1].style.paddingBottom = '0px'; 
		par[2].style.height = '0px';
		par[2].style.paddingTop = '0px'; 
		par[2].style.paddingBottom = '0px';
		par[3].style.paddingTop = '0px'; 
		par[3].style.paddingBottom = '0px'; 
		par[3].style.height = '0px'; 
		link[0].className += ' active';
		link[1].className = 'bar2';
		link[2].className = 'bar3';
		link[3].className = 'bar4';
		cross[0].style.transition = 'all 0.5s';
		cross[0].style.transform = 'rotate(270deg)';
		cross[1].style.transform = 'rotate(45deg)';
		cross[2].style.transform = 'rotate(45deg)';
		cross[3].style.transform = 'rotate(45deg)';
		count2 = 0;
		count3 = 0;
		count4 = 0;
	}
	else {
		par[0].style.height = '0px'; 
		par[0].style.paddingTop = '0px'; 
		par[0].style.paddingBottom = '0px';
		link[0].className = 'bar';
		cross[0].style.transform = 'rotate(45deg)';
	}
	count1++;
}

function Slide2(){
	if(count2 % 2 == 0) {
		par[1].style.height = '250px'; 
		par[1].style.paddingTop = '10px'; 
		par[1].style.paddingBottom = '10px'; 
		par[0].style.height = '0px'; 
		par[0].style.paddingTop = '0px'; 
		par[0].style.paddingBottom = '0px';
		par[2].style.height = '0px'; 
		par[2].style.paddingTop = '0px'; 
		par[2].style.paddingBottom = '0px';
		par[3].style.paddingTop = '0px'; 
		par[3].style.paddingBottom = '0px'; 
		par[3].style.height = '0px'; 
		link[0].className = 'bar1';
		link[1].className += ' active';
		link[2].className = 'bar3';
		link[3].className = 'bar4';
		cross[1].style.transition = 'all 0.5s';
		cross[1].style.transform = 'rotate(270deg)';
		cross[0].style.transform = 'rotate(45deg)';
		cross[2].style.transform = 'rotate(45deg)';
		cross[3].style.transform = 'rotate(45deg)';
		count1 = 0;
		count3 = 0;
		count4 = 0;
	}
	else {
		par[1].style.height = '0px';
		par[1].style.paddingTop = '0px'; 
		par[1].style.paddingBottom = '0px';  
		link[1].className = 'bar';
		cross[1].style.transform = 'rotate(45deg)';
	}
	count2++;
}

function Slide3(){
	if(count3 % 2 == 0) {
		par[2].style.height = '270px'; 
		par[2].style.paddingTop = '10px'; 
		par[2].style.paddingBottom = '10px'; 
		par[0].style.height = '0px'; 
		par[0].style.paddingTop = '0px'; 
		par[0].style.paddingBottom = '0px';
		par[1].style.height = '0px'; 
		par[1].style.paddingTop = '0px'; 
		par[1].style.paddingBottom = '0px';
		par[3].style.paddingTop = '0px'; 
		par[3].style.paddingBottom = '0px'; 
		par[3].style.height = '0px'; 
		link[0].className = 'bar';
		link[1].className = 'bar';
		link[2].className += ' active';
		link[3].className = 'bar';
		cross[2].style.transition = 'all 0.5s';
		cross[2].style.transform = 'rotate(270deg)';
		cross[1].style.transform = 'rotate(45deg)';
		cross[0].style.transform = 'rotate(45deg)';
		cross[3].style.transform = 'rotate(45deg)';
		count1 = 0;
		count2 = 0;
		count4 = 0;
	}
	else {
		par[2].style.height = '0px'; 
		par[2].style.paddingTop = '0px'; 
		par[2].style.paddingBottom = '0px'; 
		link[2].className = 'bar';
		cross[2].style.transform = 'rotate(45deg)';
	}
	count3++;	
}

function Slide4(){
	if(count4 % 2 == 0) {
		par[3].style.height = '150px'; 
		par[3].style.paddingTop = '10px'; 
		par[3].style.paddingBottom = '10px'; 
		par[0].style.height = '0px'; 
		par[0].style.paddingTop = '0px'; 
		par[0].style.paddingBottom = '0px';
		par[1].style.height = '0px'; 
		par[1].style.paddingTop = '0px'; 
		par[1].style.paddingBottom = '0px';
		par[2].style.paddingTop = '0px'; 
		par[2].style.paddingBottom = '0px'; 
		par[2].style.height = '0px'; 
		link[0].className = 'bar1';
		link[1].className = 'bar2';
		link[2].className = 'bar3';
		link[3].className += ' active';
		cross[3].style.transition = 'all 0.5s';
		cross[3].style.transform = 'rotate(270deg)';
		cross[1].style.transform = 'rotate(45deg)';
		cross[2].style.transform = 'rotate(45deg)';
		cross[0].style.transform = 'rotate(45deg)';
		count1 = 0;
		count2 = 0;
		count3 = 0;
	}
	else {
		par[3].style.height = '0px'; 
		par[3].style.paddingTop = '0px'; 
		par[3].style.paddingBottom = '0px'; 
		link[3].className = 'bar';
		cross[3].style.transform = 'rotate(45deg)';
	}
	count4++;	
}

function Default (){
	var button = document.querySelector('.custom');
	button.style.padding = '10px 20px';
	button.style.backgroundColor = bg_color;
	button.style.textDecoration = 'none';
	button.style.color = font_color;
	button.style.fontSize = '1.3em';
	button.style.fontFamily = font1;
	button.innerHTML = text1;
	var dim = document.querySelector('.custom');
	var w = dim.offsetWidth;
	var h = dim.offsetHeight;
	document.querySelector('#main_1').value = w;
	document.querySelector('#main_2').value = h;
}