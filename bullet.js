function Bullet(left, top, direction) {
	this.left = left + 25 ;
	this.top = top + 25;
	
	this._dx = 0;
	this._dy = 0;
	this.direction = direction;
	this.element = document.createElement('div');
	this.element.classList.add('shot');

	switch(this.direction){
		case 0:
			this._dy = -10;
			break;
		case 180:
			this._dy = 10;
			break;
		case 90:
			this._dx += 10;
			break;
		case 270:
			this._dx -= 10;
			break;
	}

	this.update = function(keys){
		this.left += this._dx;
		this.top += this._dy;
		if(this.left > document.body.clientWidth || this.left < 0){
			$(this.element).remove();
		}	
		if(this.top > document.body.clientHeight || this.top < 0){
			$(this.element).remove();
		}	
	};

	this.render = function(){
		$(this.element).css({ "top": this.top, "left": this.left });
	};

	this.update({});
	this.render();
	$("body").append(this.element);
}