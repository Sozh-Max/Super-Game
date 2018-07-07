
function templateTranslateEnglish(word) {
	return `<div class="translateEnglish_task">
		<div class="word_text">
			Переведите с английского на русский слово:
		</div>
		<div class="word_block">${word}</div>
		<div class="word_input">
			<input type="text" class="word_answer">
		</div>
	</div>`;
};

function templateMathematicalOperations(count) {
	return `<div class="mathematicalOperations">
		<div class="math_text">
			Запишите результат целым числом, округленным до ближайшего целого.
		</div>
		<div class="math_block">${count}</div>
		<div class="math_input">
			<input type="text" class="math_answer">
		</div>
	</div>`;
};

function templateSortable(word) {
	let str = `<div class="sortable_task">
		<ul>`;
		word.forEach(function(item, i, arr){
			let letter = word[i];
			str += `<li data-letter="${letter}">${letter}</li>`
		});
str +=	`</ul>
			</div>`;
	return str;
}

function templateJavaScript(image, array) {
	let str = `<div class="javascript">
	<div class="js_text">
		Что покажет console.log() в данном случае:
	</div>
	<div class="js_img">
		<img src="${image}" alt="">
	</div>
	<div class="js_variants">`
	array.forEach(function(item, i, arr){
		let letter = array[i];
		
	str += `<div class="radio_block">
			<label>
				<input type="radio" name="js" value="${letter}"` 
				if(i===0){
					str += ` checked `
				}; 
				str += `>
				<span>${letter}</span>
			</label>
		</div>`
		});
	str += `</div>
	</div>`
	return str;
}

function templateGeometry(text) {
	return `<div class="geometry">
						<div class="geometry_text">${text}</div>
						<div class="geometry_text">
							Запишите результат целым числом, округленным до ближайшего целого.
						</div>
						<div class="geometry_input">
							<input type="text" class="geometry_answer">
						</div>
					</div>`;
}

function templatePuzzles(words) {
	return `<div class="puzzles">
		<div class="puzzles_text">
			${words}
		</div>
		<div class="puzzles_input">
			<input type="text" class="puzzles_answer">
		</div>
	</div>`;
};

function templateEmptyString(word) {
	return `<div class="empty">
		<div class="empty_text">
			Запишите недостающие буквы в поле для ввода, их колличество зависит от точек.
		</div>
		<div class="empty_block">
			${word}
		</div>
		<div class="empty_input">
			<input type="text" class="empty_answer">
		</div>
	</div>`;
};

function templateComparison(numbLeft, numbRight) {
	return `<div class="comparison">
	<div class="comparison_text">
		Впишите символ(>,<,=), чтобы выражение стало верным:
	</div>
	<div class="comparison_block">
		<div class="numb">${numbLeft}</div>
		<div class="symbol"><input type="text" class="input_symbol" maxlength="1"></div>
		<div class="numb">${numbRight}</div>
	</div>
</div>`
}

function templateSpeech(){
	return `<div class="speech">
	<div class="speech_text">Нажимите на кнопку, чтобы прослушать:</div>
	<div class="speech_block">
		<button class="btn_speech">Прослушать</button>
	</div>
	<div class="speech_input">
		<input type="text" class="speech_answer">
	</div>
</div>`
}


export default {templateTranslateEnglish, templateMathematicalOperations, templateSortable, templateJavaScript, templateGeometry, templatePuzzles, templateEmptyString, templateComparison, templateSpeech}