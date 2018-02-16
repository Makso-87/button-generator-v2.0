/*Объявляем переменные*/ 
var padding_vertical;
var padding_horizontal;
var font_s;
var font_fam;
var border_width;
var sh_x;
var sh_y;
var sh_blur;
var sh_strach;
var rad;
var tsh_x;
var tsh_y;
var tsh_blur;
var text_shadow_color;

/*Функция изменяет текст внутри поля кнопки*/ 

function text(){
	document.querySelector('.custom').innerHTML = text1;
}

/*Функция устанавливает семейство шрифта*/ 

function font(){
	var val = document.querySelectorAll('option');
	var el = document.querySelector('#sp6');
	for (var i = 0; i < val.length; i++) {
		if (val[i].selected) {
			font1 = val[i].value;
			break;
		}
	}
	
	document.querySelector('.custom').style.fontFamily = font1;
	/*Проверяем есть ли элемент span с id sp6 */
	if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp6');
			el.innerHTML = `font-family: "${font1}";<br>`;
		}
		else {
			el.innerHTML = `font-family: "${font1}";<br>`;
		}
}

/*Функция устанавливает цвет текста кнопки*/

function button(){
	document.querySelector('.custom').style.color = font_color;
	document.querySelector('#text_4').value = font_color;
}

/*Функция устанавливает цвет фона кнопки*/

function backgroundColor(){
	document.querySelector('.custom').style.backgroundColor = bg_color;
	document.querySelector('#main_4').value = bg_color;
}

/*Функция устанавливает рамку кнопки*/

function border(){
	var bord =  document.getElementById('1');
	var el = document.querySelector('#sp1');
	/*Проверяем стоит ли флажок "Рамка*/
	if(bord.checked) {
		document.querySelector('.custom').style.border = `${border_width}px solid ${border_color}`;
		document.querySelector('#prop_1').value = border_width;
		/*Проверяем есть ли элемент span с id sp1 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp1');
			el.innerHTML = `border: ${border_width}px solid ${border_color};<br>`;
		}
		else{
			el.innerHTML = `border: ${border_width}px solid ${border_color};<br>`;
		}	
	}
	else 
		{
			document.querySelector('.custom').style.border = 'none';
			if(el != null)document.querySelector('.source1').removeChild(el);
		}
		document.querySelector('#prop_6').value = border_color;
}

/*Функция устанавливает тень кнопки*/

function shadow(){
	var bord =  document.getElementById('2');
	var el = document.querySelector('#sp2');
	/*Проверяем стоит ли флажок "Тень"*/
	if(bord.checked) {
		document.querySelector('.custom').style.boxShadow = `${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color}`;
		document.querySelector('#prop_2').value = sh_x;
		document.querySelector('#prop_3').value = sh_y;
		document.querySelector('#prop_4').value = sh_blur;
		document.querySelector('#prop_5').value = sh_strach;
		/*Проверяем есть ли элемент span с id sp2 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp2');
			el.innerHTML = `box-shadow: ${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color};<br>`;
		}
		else {
			el.innerHTML = `box-shadow: ${sh_x}px ${sh_y}px ${sh_blur}px ${sh_strach}px ${shadow_color};<br>`;
		}
		
	}
	else {
		document.querySelector('.custom').style.boxShadow = 'none';
		if(el != null)document.querySelector('.source1').removeChild(el);
	}
	document.querySelector('#prop_7').value = shadow_color;
}

/*Функция устанавливает тень кнопки*/

function textShadow(){
	var bord =  document.getElementById('4');
	var el = document.querySelector('#sp3');
	/*Проверяем стоит ли флажок "Тень текста*/
	if(bord.checked) {
		document.querySelector('.custom').style.textShadow = `${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color}`;
		document.querySelector('#text_1').value = tsh_x;
		document.querySelector('#text_2').value = tsh_y;
		document.querySelector('#text_3').value = tsh_blur;
		/*Проверяем есть ли элемент span с id sp3 */
		if(el === null) {
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp3');
			el.innerHTML = `text-shadow: ${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color};<br>`;
		}
		else {
			el.innerHTML = `text-shadow: ${tsh_x}px ${tsh_y}px ${tsh_blur}px ${text_shadow_color};<br>`;
		}
	}
	else {
		document.querySelector('.custom').style.textShadow = 'none';
		if(el != null) document.querySelector('.source1').removeChild(el);
	}
	document.querySelector('#text_5').value = text_shadow_color;
}

/*Функция устанавливает ширину и высоту кнопки*/

function dimentionButton(){
	var dim = document.querySelector('.custom');
	dim.style.padding =  `${height}px ${width}px`;
	var w = dim.offsetWidth;
	var h = dim.offsetHeight;
	document.querySelector('#main_1').value = w;
	document.querySelector('#main_2').value = h;
}

/*Функция устанавливает скругление углов кнопки*/

function radius(){
	var bord =  document.getElementById('3');
	var el = document.querySelector('#sp4');
	/*Проверяем стоит ли флажок "Скругление углов*/
	if(bord.checked) {
		document.querySelector('.custom').style.borderRadius = rad + "px ";
		document.querySelector('#main_3').value = rad;
		/*Проверяем есть ли элемент span с id sp4*/
		if(el === null){
			el = document.createElement('span');
			document.querySelector('.source1').appendChild(el);
			el.setAttribute('id', 'sp4');
			el.innerHTML = `border-radius: ${rad}px;<br>
							-moz-border-radius: ${rad}px;<br>
							-webkit-border-radius: ${rad}px;<br>`;
			
		}
		else {
			el.innerHTML = `border-radius: ${rad}px;<br>
							-moz-border-radius: ${rad}px;<br>
							-webkit-border-radius: ${rad}px;<br>`;
		} 
	}
	else {
		document.querySelector(".custom").style.borderRadius = "0px";
		if(el != null) document.querySelector('.source1').removeChild(el);
	}
}

/*Функция отвечает за эффект hover у кнопки*/

function hover(){
	var bord = document.querySelectorAll('[name="hover"]');
	var el = document.querySelector('#sp5');
	var res;
		/*Проверяем выбран ли флажок "Сплошной фон"*/
		if(bord[0].checked) {
			var but = document.querySelector('.custom');
			but.addEventListener('mouseover', function(){
				but.style.background = hoverbg;
			});
			but.addEventListener('mouseout', function(){
				but.style.background = bg_color;
			});
			/*Проверяем есть ли элемент span с id sp5 */
			if(el === null){
			el = document.createElement('span');
				document.querySelector('.source2').appendChild(el);
				el.setAttribute('id', 'sp5');
				el.innerHTML = `.button:hover {<br>background: ${hoverbg};`;
			}
			else {
				el.innerHTML = `.button:hover {<br>background: ${hoverbg};`;
			}
			document.querySelector('#hov_1').value = hoverbg;
		}
		else{
			var but = document.querySelector('.custom');
			but.addEventListener('mouseover', function(){
				but.style.background = `linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2})`;
			});
			but.addEventListener('mouseout', function(){
				but.style.background = bg_color;
			});
			/*Проверяем есть ли элемент span с id sp5 */
			if(el === null){
			el = document.createElemnt('span');
			document.querySelector('.source2').appendChild(el);
			el.setAttribute('id', 'sp5');
			el.innerHTML = `.button:hover {<br> background: linear-gradient(to top, ${hovergradcol1},  ${hovergradcol2});<br>
												background: -o-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -ms-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -moz-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												background: -webkit-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>`;
			}
			else {
				el.innerHTML = `.button:hover {<br> background: linear-gradient(to top, ${hovergradcol1},  ${hovergradcol2});<br>
												    background: -o-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -ms-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -moz-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>
												    background: -webkit-linear-gradient(to top, ${hovergradcol1}, ${hovergradcol2});<br>`;
			}
			document.querySelector('#hov_2').value = hovergradcol1;
			document.querySelector('#hov_3').value = hovergradcol2;
		}

}

/*Функция выводит готовый код кнопки в окно для копирования пользователем*/

function output(){
			document.querySelector('.source').innerHTML = `.button {<br>
														color: ${font_color};<br> 
														background-color: ${bg_color};<br>
														padding: ${height}px ${width}px;<br>
														text-decoration: none;<br>
														font-size: 1.3em;<br>`;

		}

/*Данная вызывает функции установки параметров при именении любого значения любого элемента формы*/

function change(){
	text1 =  document.querySelector("[name='text']").value;
	font_color = document.querySelector("[name='font']").value;
	bg_color = document.querySelector("[name='bg']").value;
	border_color = document.querySelector("[name='border_color']").value;
	shadow_color = document.querySelector("[name='shadow_color']").value;
	border_width = document.querySelector("[name='brd_width']").value;
	sh_x = document.querySelector("[name='sh_x']").value;
	sh_y = document.querySelector("[name='sh_y']").value;
	sh_blur = document.querySelector("[name='sh_blur']").value;
	sh_strach = document.querySelector("[name='sh_strach']").value;
	rad = document.querySelector("[name='rad']").value;
	tsh_x = document.querySelector("[name='tsh_x']").value;
	tsh_y = document.querySelector("[name='tsh_y']").value;
	tsh_blur = document.querySelector("[name='tsh_blur']").value;
	text_shadow_color = document.querySelector("[name='text_shadow_color']").value;
	width = document.querySelector("[name='width']").value;
	height = document.querySelector("[name='height']").value;
	hoverbg = document.querySelector("[name='hover_color']").value;
	hovergradcol1 = document.querySelector("[name='hover_grad_col_1']").value;
	hovergradcol2 = document.querySelector("[name='hover_grad_col_2']").value;
	output();
	button();
	backgroundColor();
	border();
	shadow();
	radius();
	textShadow();
	dimentionButton();
	hover();
	text();
	font();
}

/*Функция копирует в буфер сгенерированный код кнопки*/

function clipBoard(){
	/*нашли наш контейнер*/
	var cont = document.getElementById('container'); 
	/*производим его выделение*/
	var range = document.createRange();
	range.selectNode(cont); 
	window.getSelection().addRange(range); 
	/*пытаемся скопировать текст в буфер обмена*/
	try { 
	    document.execCommand('copy'); 
	    var parent = document.getElementById('cont_right');
	    var el = document.createElement('span');
	    var chil = parent.childNodes;
	    /*Проверяем есть ли уже элемент span*/
	    if(chil.length < 1) {
	  	parent.appendChild(el);
	  }
	  el.innerHTML = '';
	  el.innerHTML = 'Код успешно скопирован!';
	  el.style.position = 'relative';
	  el.style.top = '10px';
	  el.style.opacity = '0';
	  el.style.border = '1px solid';
	  el.style.padding = '10px 20px';
	  el.style.borderRadius = '20px';
	  el.className = 'anim_output';
	} catch(err) { 
	  console.log('Can`t copy, boss'); 
	} 
	/*очистим выделение текста, чтобы пользователь "не парился"*/
	window.getSelection().removeAllRanges();
}

