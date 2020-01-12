function Aplication() {
	var self = this;

	this.keyMap = {};
	this.tank = new Tank();
	this.tank2 = new Tank();

	this.start = function () {
		$(document).ready(function () {
			$(document).on('keydown', function (event) {
				self.keyMap[event.keyCode] = true;
			});

			$(document).on('keypress', function (event) {
				if (event.keyCode == 32) {
					self.tank.fire();
				}
			});

			$(document).on('keyup', function (event) {
				delete self.keyMap[event.keyCode];
			});

			setInterval(function () {
				self.tank.update(self.keyMap);
				self.tank.render();
				self.tank2.render();
			}, 15);
		})
	}

	// this.hasCollision = function () {
	// 	if (this.tank.top == this.tank2.top && this.tank.left == this.tank2.left) {
	// 	}
	// }

}