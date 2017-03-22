class TriangleLabyrinthView extends eui.Component {
	public constructor() {
		super();
		this.init();
	}
	private init() {
		let gShape = new egret.Shape();
		gShape.x = 100;
		gShape.y = 100;
		this.addChild(gShape);
		let graphics = gShape.graphics;

		// 六边形
		let col = 10;
		let row = 10;
		let r = GameData.r;
		let delta = 2 * Math.PI/6;
		console.log(GameData.labyArr);
		for (let pos = 0; pos < GameData.labyArr.length; pos++) {
			let i = this.getRow(pos, 10);
			let j = this.getCol(pos, 10);
			let drawData = GameData.labyArr[pos];
			let xMul =  (i % 2 === 0) ? 0 : 1;
			this.drawPolygon(graphics, 6, (j * r * 2 + xMul * r) * Math.sin(delta) ,  i * r * 3 / 2, r, null, null, drawData );
		}
		// for (let i = 0; i < row; i++) {
		// 	for (let j = 0; j < col; j++) {
		// 		let drawData = GameData.labyArr[i][j];
		// 		this.drawPolygon(graphics, 6, (j * r * 2 + i * r) * Math.sin(delta) ,  i * r * 3 / 2, r, null, null, drawData );
		// 	}
		// }

		// 三角形
		// let col = 6;
		// let row = 6;
		// let r = 50;
		// let delta = 2 * Math.PI/6;
		// for (let i = 0; i < col; i++) {
		// 	for (let j = 0; j < row; j++) {
		// 		if ( j % 2 === 1) {
		// 			this.drawPolygon(graphics, 3, i * r * Math.sin(delta) * 2 + r * Math.sin(delta) ,  j * r * 3 / 2, r );
		// 		} else {
		// 			this.drawPolygon(graphics, 3, 2 * r * Math.sin(delta) + i * r * Math.sin(delta) * 2,  j * r * 3 / 2, r );
		// 		}
				
		// 	}
		// }
	}
	private getRow(pos, col) {
		let twoRow = col * 2 - 1;
		 return Math.floor(pos / twoRow) * 2 + (pos - Math.floor(pos / twoRow) * twoRow ) / col | 0
	}
	private getCol(pos, col) {
		let twoRow = col * 2 - 1;
		return pos % twoRow % col;
	}
	private drawPolygon(graphics: egret.Graphics, n, x, y, r, angle = 0, counterclockwise = false, drawData = []) {
		graphics.lineStyle(3, 0x000000);
		graphics.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
		
		let delta = 2 * Math.PI/n;
		for(var i = 0; i < n; i++) {
			angle += counterclockwise ? - delta: delta;
			if (drawData[i] === 1) {
				graphics.endFill();
				graphics.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
			} else {
				graphics.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
				
			}
			
		}
		graphics.endFill();
	}
}