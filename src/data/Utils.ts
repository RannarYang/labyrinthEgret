class Utils {
    public static getHexagonRow(pos, col) {
    let twoRow = col * 2 - 1;
        return Math.floor(pos / twoRow) * 2 + (pos - Math.floor(pos / twoRow) * twoRow ) / col | 0
    }
    public static getHexagonCol(pos, col) {
        let twoRow = col * 2 - 1;
        return pos % twoRow % col;
    }
    public static getHexagonPos(pr, pc, col) {
		let twoRow = col * 2 - 1;
		return Math.floor(pr / 2) * twoRow + (pr % 2) * col + pc;
	}
	public static getHexagonCount(row, col) {
		return row * col - Math.floor(row / 2);
	}
    public static drawPolygon(graphics: egret.Graphics, n, x, y, r, angle = 0, counterclockwise = false, lineColor = 0x000000, fillColor = null, drawData : number[] = []) {
		lineColor !== null && graphics.lineStyle(3, lineColor);
		fillColor && graphics.beginFill(fillColor, 0.4);
		graphics.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
		
		let delta = 2 * Math.PI/n;
		for(var i = 0; i < n; i++) {
			angle += counterclockwise ? - delta: delta;
			if (drawData[i] === 1) {
				graphics.endFill();
				graphics.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
			} else {
				graphics.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
				
			}
			
		}
		graphics.endFill();
	}

	public static drawPolygon1(graphics: egret.Graphics, n, x, y, r, angle = 0, counterclockwise = false) {
		graphics.lineStyle(3, 0xff0000);
		graphics.beginFill(0xff0000, 0.4);
		graphics.moveTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
		
		let delta = 2 * Math.PI/n;
		for(var i = 0; i < n; i++) {
			angle += counterclockwise ? - delta: delta;
			graphics.lineTo(x + r * Math.sin(angle), y - r * Math.cos(angle));
		}
		graphics.endFill();
	}
}