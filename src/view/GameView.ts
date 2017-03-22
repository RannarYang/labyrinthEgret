class GameView extends eui.Component{
	private _hexagonLabyrinthView: HexagonLabyrinthView;
	public constructor() {
		super();
		this.init();
	}
	public newHexagonLabyrinthView() {
		if(this._hexagonLabyrinthView) {
			this.removeChild(this._hexagonLabyrinthView);
		}
		let hexagonLabyrinthView = this._hexagonLabyrinthView = new HexagonLabyrinthView();
		this._hexagonLabyrinthView.addEventListener(HexagonLabyrinthViewEvent.SUCCESS, this.success, this);
		this.addChild(hexagonLabyrinthView);
	}
	public showTips() {
		this._hexagonLabyrinthView.showTips();
	}
	private init() {
		this.newHexagonLabyrinthView();

		this.addEntranceExit();

		let replayBtn = this.createBtn("重玩", 240, 1020);
		this.addChild(replayBtn);
		replayBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_replayBtn, this);

		let nextBtn = this.createBtn("下一关", 430, 1020);
		this.addChild(nextBtn);
		nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_nextBtn, this);

		let showLineBtn = this.createBtn("提示", 50, 1020);
		this.addChild(showLineBtn);
		showLineBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_tipsBtn, this);
	}
	private createBtn(text, x, y) :eui.Component{
		let btn = new eui.Component();
		let btnWidth = 170;
		let btnHeight = 80;
		btn.x = x;
		btn.y = 1020;
		let btnShap = new egret.Shape();
		btn.addChild(btnShap);
		let graphics = btnShap.graphics;
		graphics.beginFill(0xF9B2A5, 1);
		graphics.drawRoundRect(0, 0, btnWidth, btnHeight, 20);
		graphics.endFill();

		let btnText = new eui.Label(text);
		btnText.size = 40;
		btnText.textAlign = 'center';
		btnText.verticalAlign = 'middle';
		btnText.width = btnWidth;
		btnText.height = btnHeight;
		btn.addChild(btnText);
		return btn;
	}
	private addEntranceExit() {
		let entranceText = new eui.Label('入口 >');
		entranceText.y = 50;
		entranceText.textColor = 0xff0000;
		entranceText.size = 25;
		this.addChild(entranceText);

		let exitText = new eui.Label('出口 >');
		exitText.x = 560;
		exitText.y = 945;
		exitText.textColor = 0xff0000;
		exitText.size = 25;
		this.addChild(exitText);
	}
	private tap_tipsBtn() {
		let gve: GameViewEvent = new GameViewEvent(GameViewEvent.TAP_TIPS);
		this.dispatchEvent(gve);
	}
	private tap_replayBtn() {
		let gve: GameViewEvent = new GameViewEvent(GameViewEvent.TAP_REPLAY);
		this.dispatchEvent(gve);
	}
	private tap_nextBtn() {
		let gve: GameViewEvent = new GameViewEvent(GameViewEvent.TAP_NEXT);
		this.dispatchEvent(gve);
	}
	private success() {
		let gve: GameViewEvent = new GameViewEvent(GameViewEvent.SUCCESS);
		this.dispatchEvent(gve);
	}
}