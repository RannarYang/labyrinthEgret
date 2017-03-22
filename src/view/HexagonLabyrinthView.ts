class HexagonLabyrinthView extends eui.Component {
	private nowStateShape: egret.Shape;
	private clickShapeArr = [];
	private tipsView: TipsView;
	private canTouch = true;
	private isShowTips = false;
	public constructor() {
		super();
		this.init();
	}
	public showTips() {
		this.isShowTips = true;
		let path = HexagonLabyrinthLogic.getShortestPath(GameData.nowState);
		this.tipsView.showTips(path);
	}
	private init() {
		this.isShowTips = false;
		// add hexagonLabyrinth line
		let gShape = new egret.Shape();
		gShape.x = 100;
		gShape.y = 100;
		this.addChild(gShape);
		let graphics = gShape.graphics;

		let r = GameData.r;
		let delta = 2 * Math.PI/6;
		for (let pos = 0; pos < GameData.labyArr.length; pos++) {
			let i = Utils.getHexagonRow(pos, GameData.col);
			let j = Utils.getHexagonCol(pos, GameData.col);
			let drawData = GameData.labyArr[pos];
			let xMul =  (i % 2 === 0) ? 0 : 1;
			Utils.drawPolygon(graphics, 6, (j * r * 2 + xMul * r) * Math.sin(delta) ,  i * r * 3 / 2, r, null, null, 0x00B3E2, null,drawData );
		}

		this.tipsView = new TipsView();
		this.addChild(this.tipsView)
		// add a click area
		let clickShape = new ClickShape(0);
		this.addChild(clickShape);
		clickShape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchShape, this);
		this.clickShapeArr.push(clickShape);

		// add now state
		let nowStateShape = this.nowStateShape = new egret.Shape();
		nowStateShape.x = -50;
		this.addChild(nowStateShape);
		Utils.drawPolygon1(nowStateShape.graphics, 3, 100 ,  100, 10 );

	}
	private touchShape(evt: egret.TouchEvent) {
		if (evt.currentTarget.num === GameData.labyArr.length -1) {
			// 走到最后一个格子
			let sevent:HexagonLabyrinthViewEvent = new HexagonLabyrinthViewEvent(HexagonLabyrinthViewEvent.SUCCESS);
			this.dispatchEvent(sevent);
		}
		this.canTouch = false;
		let num = evt.currentTarget.num;

		// 设置GameData的nowState
		GameData.nowState = num;
		if (this.isShowTips) {
			let path = HexagonLabyrinthLogic.getShortestPath(GameData.nowState);
			this.tipsView.showTips(path);
		}

		var tw:egret.Tween = egret.Tween.get(this.nowStateShape);
		tw.to({x: evt.currentTarget.centerX, y: evt.currentTarget.centerY}, 200).call(()=>{
			for(let i = 0; i < this.clickShapeArr.length; i++) {
				this.removeChild(this.clickShapeArr[i]);
			}
			this.clickShapeArr = [];
			let nextCanMoveArr = HexagonLabyrinthLogic.getNextCanMoveNum(num);
			for(let i = 0; i < nextCanMoveArr.length; i++) {
				let canMoveNum = nextCanMoveArr[i];
				let clickShape = new ClickShape(canMoveNum);
				clickShape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchShape, this);
				this.addChild(clickShape);
				this.clickShapeArr.push(clickShape);
			}
			this.canTouch = true;
		});
	}
}