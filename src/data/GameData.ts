class GameData {
	public static labyArr;
	public static row: number;
	public static col: number;
	public static gameType: string = 'hexagon';
	public static r: number = 30;
	public static stageW: number;
	public static stageH: number;
	public static nowState: number = 0;

	// view
	public static pink = 0xF9B2A5;
	public static yellow = 0xffff00;
	public static red = 0xff0000;
	public static initData() {
		GameData.labyArr = [];
		GameData.stageW = 640;
		GameData.stageH = 1136;
		GameData.nowState = 0;
	}
}