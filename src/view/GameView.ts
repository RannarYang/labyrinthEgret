class GameView extends eui.Component{
	public constructor() {
		super();
		this.init();
	}
	private init() {
		// let gShape = new egret.Shape();
		// this.addChild(gShape);
        // let graphics = gShape.graphics;
        // graphics.beginFill(0xffff00);
        // for (let i = 0; i < GameData.labyArr.length; i++) {
        //     for ( let j = 0; j < GameData.labyArr[i].length; j++) {
        //         if ( GameData.labyArr[i][j] === 1) {
        //                 graphics.drawRect(i * WIDTH, j * HEIGHT, WIDTH, HEIGHT);
        //         }
        //     }
        // }
		// graphics.endFill();

		console.log('================================', GameData.labyArr)
		let gShape = new egret.Shape();
		gShape.x = 100;
		gShape.y = 100;
		this.addChild(gShape);
		let graphics = gShape.graphics;

		// 六边形
		let col = 10;
		let row = 10;
		let r = 20;
		let delta = 2 * Math.PI/6;
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < col; j++) {
				let drawData = GameData.labyArr[i][j];
				this.drawPolygon(graphics, 6, (j * r * 2 + i * r) * Math.sin(delta) ,  i * r * 3 / 2, r, null, null, drawData );
			}
		}

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