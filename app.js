// task 1:

	function sum(x) {
		let first = x;

		return function (second){
			console.log('sum', first + second);
		}
	}

	const sum1 = sum(1);
	console.log('first call:');
	sum1(2);

	console.log('second call:');
	sum(1)(2);

	//task 2:

	for (var i = 0; i < 10; i++) {
		let num = i + 1;
		setTimeout(function() {
			console.log(num);
		}, 0);
	}
	/*Ответ на вопрос: функция setTimeout хранит лишь ссылку на переменную i и когда она отработает, цикл уже дойдет до финального значения i=9 (грубо говоря, пока запустится первый таймаут, цикл уже отработается и поэтому 10 раз выведется последнее значение i). 
	Ну и поскольку цикл у нас заявлен от 0 до 10 (не включая 10), увеличиваем i на 1 и записываем в переменную num.*/