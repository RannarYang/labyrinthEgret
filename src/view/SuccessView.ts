class SuccessView extends eui.Component{
	public constructor() {
		super();
		this.init();
		this.hide();
	}
	public show() {
		this.visible = true;
	}
	public hide() {
		this.visible = false;
	}
	private init() {
		console.log('init: =========');
		let cover = new egret.Shape();
		cover.graphics.beginFill(0xA7E8E3, 0.7);
		cover.graphics.drawRect(0, 0, GameData.stageW, GameData.stageH);

		cover.graphics.beginFill(0x0A9BC1, 1);
		cover.graphics.drawRoundRect(50, 353, 540, 430, 20);
		cover.graphics.endFill();
		this.addChild(cover);

		let youWinLabel = new eui.Label('YOU WIN');
		youWinLabel.textColor = 0xF79381;
		youWinLabel.strokeColor = 0xffffff;
		youWinLabel.stroke = 2;
		youWinLabel.width = GameData.stageW;
		youWinLabel.height = GameData.stageH;
		youWinLabel.textAlign = 'center';
		youWinLabel.horizontalCenter = 'middle';
		youWinLabel.size = 100;
		youWinLabel.y = 420;
		this.addChild(youWinLabel);

		let nextLevelBtn = this.createNextLevelBtn();
		nextLevelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tap_next, this);
		this.addChild(nextLevelBtn);
	}
	private createNextLevelBtn() {
		let btn = new eui.Component();
		let btnWidth = 170;
		let btnHeight = 80;
		btn.x = 235;
		btn.y = 620;
		let btnShap = new egret.Shape();
		btn.addChild(btnShap);
		let graphics = btnShap.graphics;
		graphics.beginFill(0xF9B2A5, 1);
		graphics.drawRoundRect(0, 0, btnWidth, btnHeight, 20);
		graphics.endFill();

		let btnText = new eui.Label('下一关');
		btnText.size = 40;
		btnText.textAlign = 'center';
		btnText.verticalAlign = 'middle';
		btnText.width = btnWidth;
		btnText.height = btnHeight;
		btn.addChild(btnText);
		return btn;
	}
	private tap_next() {
		this.hide();
		let evt: SuccessViewEvent = new SuccessViewEvent(SuccessViewEvent.TAP_NEXT);
		this.dispatchEvent(evt);
	}
}