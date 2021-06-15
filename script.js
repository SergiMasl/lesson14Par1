class DomElement {
	constructor(selector, height, width, bg, fontSize) {
		this.selector = selector;
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
	}

	creatEl(){
		const style =`
		    height: ${this.height};
		    width: ${this.width};
		    background-color: ${this.bg};
		    font-size: ${this.fontSize};
		`;
		function createNeEl (elem){
			document.body.appendChild(elem);
		}

		const selector = this.selector
		let res = selector.substring(1, selector.length);
		let fistrRes = selector.substring(0, 1);

		if (fistrRes === '.'){
			let newEl = document.createElement('div')
			newEl.setAttribute("class", res);
			newEl.style.cssText = style;
			newEl.textContent = 'Hello i am div';
			createNeEl(newEl);
		} 
		if(fistrRes === '#'){
			let newEl = document.createElement('p')
			newEl.setAttribute("id", res);
			newEl.style.cssText = style;
			newEl.textContent = 'Hello i am paragraf';
			createNeEl(newEl);
		}

	}
};
let divElem = new DomElement(".block'", "100px", '100px', 'yellow', '20px');
let pElem = new DomElement("#block'", "200px", '140px', 'red', '20px');


divElem.creatEl()
pElem.creatEl()






