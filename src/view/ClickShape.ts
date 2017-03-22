class ClickShape extends egret.Shape{
	private _num: number;
	public centerX: number;
	public centerY: number;
	public constructor(num) {
		super();
		this._num = num;
		this.init();
	}
	public get num() {
		return this._num
	}
	private init() {
		this.x = 100;
		this.y = 100;
		let pos = this._num;
		let delta = 2 * Math.PI/6;
		let i = Utils.getHexagonRow(pos, GameData.col);
		let j = Utils.getHexagonCol(pos, GameData.col);;
		let drawData = GameData.labyArr[pos];
		let xMul =  (i % 2 === 0) ? 0 : 1;
		let centerX = this.centerX = (j * GameData.r * 2 + xMul * GameData.r) * Math.sin(delta);
		let centerY = this.centerY = i * GameData.r * 3 / 2;
		Utils.drawPolygon(this.graphics, 6, centerX, centerY, GameData.r,null, null, null, GameData.yellow,[ 0, 0, 0, 0, 0, 0] );
		this.touchEnabled = true;

		var tw:egret.Tween = egret.Tween.get(this ,{loop:true});
		tw.to({alpha: 0.5}, 500);
	}
}