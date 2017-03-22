class LevelGameDataParse {
	public static parseLevelGameData(levelData: any) {
		// console.log('levelData:', levelData);
		GameData.row = levelData.row;
		GameData.col = levelData.col;
		GameData.r = levelData.r;
	}
}