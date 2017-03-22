class GameLogic {
	private _gameStage: eui.Component;
	private _gameView: GameView;
	private _successView: SuccessView;
	private _levelConfigData: any;
	public constructor(gameStage: eui.Component) {
		this._gameStage = gameStage;
		this.init();
	}
	private init() {
		// 初始化数据
		GameData.initData();
		
		let levelConfigData = this._levelConfigData = RES.getRes('level_json');
		LevelGameDataParse.parseLevelGameData(levelConfigData.hexagon);

		this.createLevel();
		let gameView = this._gameView = new GameView();
		this._gameStage.addChild(gameView);

		let successView = this._successView = new SuccessView();
		this._gameStage.addChild(successView);

		this._gameView.addEventListener(GameViewEvent.TAP_REPLAY, this.tap_replay, this);
		this._gameView.addEventListener(GameViewEvent.TAP_TIPS, this.tap_tips, this);
		this._gameView.addEventListener(GameViewEvent.TAP_NEXT, this.tap_next, this);
		this._gameView.addEventListener(GameViewEvent.SUCCESS, this.success, this);

		this._successView.addEventListener(SuccessViewEvent.TAP_NEXT, this.tap_next, this);
	}
	private createLevel() {
		GameData.labyArr = HexagonLabyrinthLogic.createLabyrinth(GameData.row, GameData.col);
	}
	private tap_replay() {
		this._gameView.newHexagonLabyrinthView();
	}
	private tap_tips() {

	}
	private tap_next() {
		this.createLevel();
		this._gameView.newHexagonLabyrinthView();
	}
	private success() {
		this._successView.show();
	}
}