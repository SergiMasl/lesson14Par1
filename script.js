class first {
	hello() {
		console.log('Привет я метод родителя!')
	}
}

class second extends first {
	sayHi(){
		super.hello()
		console.log('А я наследуемый метод!')
	}
};

const second1 = new second()

second1.sayHi()






