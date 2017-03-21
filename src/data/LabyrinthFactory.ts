class LabyrinthFactory {
    public static createLabyrinth(type: String) : LabyrinthImp {
        let labyrinth: LabyrinthImp = null;
        if (type === 'rect') {
            labyrinth = new RectLabyrinth(15, 10);
        } else if (type === 'heartShaped') {
            // labyrinth = new HeartShapedLabyrinth(10, 10);
        } else if (type === 'hexagon') {
            labyrinth = new HexagonLabyrinth(10, 10);
        }
        return labyrinth;
    }
}