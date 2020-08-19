let guessNumber = Math.round(Math.random() * 30);
let tries = 10;

// String const
function restartMessage() {
 	return "Загаданное число поменялось";
}
function triesMore() {
 	return "Попыток осталось: " + tries;
}

// Boolean funcs

// Функция если закончилисть попытки
function isLose() {
	 return tries === 0;
} 

// Функция если угадал число
function isWin(number) {
 	return guessNumber === number;
} 

//Функция если угаданный число больше
function isGt(number) {
 	return guessNumber > number;
} 

// Функция если угаданный число меньше
function isLt(number) {
 	return guessNumber < number;
} 

// Action funcs

// Функция уменьшение количество попыток
function makeTriesLess() {
 	tries--;
} 

// Функция для запуска и перезапуска игры
function init() {
 	guessNumber = Math.round(Math.random() * 30);
	 tries = 10;
} 

// Функция для обьявление победы 
function win() {
 	init();
 	return `Правильно! ${restartMessage()}`;
}

//Функция для обьявление поражение 
function lose() {
 	init();
 	return `Попытки закончились - Вы проиграли. ${restartMessage()}`;
}

//Функция если угаданное число больше
function gt() {
 	makeTriesLess();
	 return `Загаданное число больше. ${triesMore()}`;
}

// Функция если угаданное число меньше
function lt() {
	 makeTriesLess();
 	return `Загаданное число меньше. ${triesMore()}`;
}


// Main functon

function guess(number) {
 	if (isLose()) {
   		return lose();
 	}
 	if (isWin(number)) {
   		return win();
 	}
 	if (isGt(number)) {
   		return gt();
 	}
 	if (isLt(number)) {
   		return lt();
	}
 	return "ошибка";
}

// Для библиотеки Jquery

$(document).ready(function() {
	//выбираем слектор класа (.btb) вешаем обработчик сыбытии click
 	$(".btn").click(function() {
   		const inputValue = $("input").val(); //Взять значение текстового поля. Метод val() позволяет значение текста
   		const resultValue = guess(+inputValue); //Проверить полученное значение функцией guess(). Если добавить оператор сложения перед переменной - значение станет числом:
   		const $result = $(".result"); //Поместить результат работы функции в элемент $(‘.result’)
   		$result.html(resultValue); //Метод html() вставляет значение в контейнер, при этом если в тексте встречаются тэги, они будут вставлены именно как тэги, а не как текст.
 	});
});