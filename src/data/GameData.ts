class GameData {
	public static labyArr;
	public static row: number;
	public static col: number;
	public static gameType: string = 'hexagon';
	public static r: number = 30;
	public static stageW: number;
	public static stageH: number;
	public static initData() {
		GameData.labyArr = [];
		GameData.stageW = 640;
		GameData.stageH = 1136;
	}
}