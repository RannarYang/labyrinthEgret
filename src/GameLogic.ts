class GameLogic {
	private _gameStage: eui.Component;
	public constructor(gameStage: eui.Component) {
		this._gameStage = gameStage;
		this.init();
	}
	private init() {
		// 初始化数据
		GameData.initData();
		let gameView = new GameView();
		this._gameStage.addChild(gameView);
	}
}