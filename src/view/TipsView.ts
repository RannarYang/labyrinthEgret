class TipsView extends egret.Shape {
	public constructor() {
		super();
	}
	public showTips(path) {
		this.graphics.clear()
		this.x = 100;
		this.y = 100;
		for (let index = 0; index < path.length; index++) {
			let pos = path[index];
			let delta = 2 * Math.PI/6;
			let i = Utils.getHexagonRow(pos, GameData.col);
			let j = Utils.getHexagonCol(pos, GameData.col);;
			let drawData = GameData.labyArr[pos];
			let xMul =  (i % 2 === 0) ? 0 : 1;
			let centerX = (j * GameData.r * 2 + xMul * GameData.r) * Math.sin(delta);
			let centerY = i * GameData.r * 3 / 2;
			Utils.drawPolygon(this.graphics, 6, centerX, centerY, GameData.r,null, null, null, GameData.pink,[ 0, 0, 0, 0, 0, 0] );
		}

	}

}