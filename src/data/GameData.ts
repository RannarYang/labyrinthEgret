class GameData {
	private static _labyrinth: LabyrinthImp;
	public static labyArr;
	public static initData() {
		// console.log('initData');
		this._labyrinth = LabyrinthFactory.createLabyrinth('hexagon');
		GameData.labyArr = this._labyrinth.getLabyArr();
	}
}