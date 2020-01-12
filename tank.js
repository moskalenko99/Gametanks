function Tank() {

	this.left = Math.floor(Math.random() * 1600);
	this.top = Math.floor(Math.random() * 800);
	this.direction = 0; // up, left, right, down
	this.bullets = [];
	this.element = document.createElement('div');
	this.element.classList.add('rect');
	$("body").append(this.element);

	this.update = function (keys) {
		if (!(keys[38] && keys[37] || keys[38] && keys[39] || keys[40] && keys[37] || keys[40] && keys[39])) {
			if (keys[38]) { // up 38
				this.direction = 0;
				this.top -= 5;
			}
			if (keys[40]) { // down 40
				this.direction = 180;
				this.top += 5;
			}
			if (keys[37]) { // left 37
				this.direction = 270;
				this.left -= 5;
			}
			if (keys[39]) { // right 39
				this.direction = 90;
				this.left += 5;
			}
		}
		this.bullets.forEach(function (bullet) {
			bullet.update();
		});

	};

	this.fire = function (keys) {
		var bullet = new Bullet(this.left, this.top, this.direction);
		this.bullets.push(bullet);
	}

	this.render = function () {
		this.collision(this.left, this.top);

		$(this.element).css({
			"top": this.top,
			"left": this.left
		});
		$(this.element).css({
			"transform": "rotate(" + this.direction + "deg)"
		});

		this.bullets.forEach(function (bullet) {
			bullet.render();
		});

	};
	this.update({});

	this.collision = function (left, top) {
		let bodyWidth = document.body.clientWidth - 65;
		let bodyHeight = document.body.clientHeight - 65;

		if (left > bodyWidth) {
			this.left = bodyWidth;
		} else if (left < 0) {
			this.left = 0;
		} else if (top > bodyHeight) {
			this.top = bodyHeight;
		} else if (top < 0) {
			this.top = 0;
		}
	}
}