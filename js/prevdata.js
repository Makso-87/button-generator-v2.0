
/*Получаем начальные значения всех элементов input*/
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

/*Устанавливаем необходимые значения поля вывода информации (элементы input type="text")*/
document.querySelector("#main_4").value = bg_color;
document.querySelector("#text_4").value = font_color;
document.querySelector("#text_5").value = text_shadow_color;
document.querySelector("#prop_6").value = border_color;
document.querySelector("#prop_7").value = shadow_color;
var bar = document.querySelectorAll(".bar"); //Получаем коллекцию элементов с классом .bar (ссылки для срабатывания аккордеона)

/*Устанавливаем обработчик событий на элементы с классом .bar для нашего аккордеона*/
bar[0].addEventListener('click', Slide1);
bar[1].addEventListener('click', Slide2);
bar[2].addEventListener('click', Slide3);
bar[3].addEventListener('click', Slide4);

/*Устанавливаем обработчик событий на элемент с классом .clipboard для копирования готового кода кнопки в буфер обмена*/
document.querySelector(".clipboard").addEventListener('click', clipBoard);
var list = document.querySelectorAll("input");//Получаем коллекцию элементов input
var list2 = document.querySelectorAll("select");//Получаем коллекцию элементов select

/*Устанавливаем обработчик событий на элементы input для получения с них новых данных при любом изменении*/
for(var i = 0 ; i < list.length; i++){
	list[i].addEventListener('change', change);
}

/*Устанавливаем обработчик событий на элементы select для получения с них новых данных при любом изменении*/
for(var i = 0 ; i < list2.length; i++){
	list2[i].addEventListener('change', change);
}

change();
Default();
output();
change();