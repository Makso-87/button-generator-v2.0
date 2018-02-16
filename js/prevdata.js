var val = document.querySelector("option").value;
for(var i = 0; i < val.length; i++){
	if(val[i].selected) {
		font1 = val[i].value;
		break;
	}
}

text1 =  document.querySelector("[name='text']").value;
bg_color = document.querySelector("[name='bg']").value;
font_color = document.querySelector("[name='font']").value;
border_color = document.querySelector("[name='border_color']").value;
shadow_color = document.querySelector("[name='shadow_color']").value;
width = document.querySelector("[name='width']").value;
height = document.querySelector("[name='height']").value;
text_shadow_color = document.querySelector("[name='text_shadow_color']").value;
hoverbg = document.querySelector("[name='hover_color']").value;
hovergradcol1 = document.querySelector("[name='hover_grad_col_1']").value;
hovergradcol2 = document.querySelector("[name='hover_grad_col_2']").value;
document.querySelector("#main_4").value = bg_color;
document.querySelector("#text_4").value = font_color;
document.querySelector("#text_5").value = text_shadow_color;
document.querySelector("#prop_6").value = border_color;
document.querySelector("#prop_7").value = shadow_color;
var bar = document.querySelectorAll(".bar");
bar[0].addEventListener('click', Slide1);
bar[1].addEventListener('click', Slide2);
bar[2].addEventListener('click', Slide3);
bar[3].addEventListener('click', Slide4);

document.querySelector(".clipboard").addEventListener('click', clipBoard);
var list = document.querySelectorAll("input");
var list2 = document.querySelectorAll("select");
for(var i = 0 ; i < list.length; i++){
	list[i].addEventListener('change', change);
}

for(var i = 0 ; i < list2.length; i++){
	list2[i].addEventListener('change', change);
}

change();
Default();
output();
change();