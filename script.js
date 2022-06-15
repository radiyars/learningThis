//? Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
	val1: 0,
	val2: 0,
	read() {
		this.val1 = prompt('Задаейте первое значение', 0);
		this.val2 = prompt('Задаейте второе значение', 0);
	},
	sum() {
		return +this.val1 + +this.val2
	},
	mul() {
		return this.val1 * this.val2
	},
};

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());
console.log('----------------------------------');


//? Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.


let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () { // показывает текущую ступеньку
		alert(this.step);
		return this;
	}
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

ladder.up().up().down().showStep(); // 1