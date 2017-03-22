class HexagonLabyrinthLogic {
	private static _row: number;
	private static _col: number;
	private static _labyArr = [];
	public static getNextCanMoveNum(num) : number[]{
		let canMoveNumArr = [];
		let labyArrExit = GameData.labyArr[num];
		let col = GameData.col;
		let off1 = [ - col + 1, +1, + col, + col -1  ,-1, - col];
		for (let i = 0; i < labyArrExit.length; i++) {
			if ((num === 0 && i === 4) || (num === GameData.labyArr.length - 1 && i === 1)){
				continue;
			}
			if (labyArrExit[i] === 1) {
				let canMoveNum = num + off1[i] ;
				canMoveNumArr.push(canMoveNum);
			}
		}
		return canMoveNumArr;
	}
	public static createLabyrinth(row, col) {
		this._row = row;
		this._col = col;
		this.initLabyrinthArr();
		this.makeLink();
		this.setEntranceExit();
		return this._labyArr;
	}

	private static initLabyrinthArr() {
		let count = Utils.getHexagonCount(this._row, this._col);
		let labyArr = this._labyArr = [];
		for (let i = 0; i < count; i++) {
			labyArr[i] = this._labyArr[i] = [0, 0, 0, 0, 0, 0];
		}
	}
	private static makeLink() {
		let row = this._row;
		let col = this._col;
		let count = Utils.getHexagonCount(this._row, this._col);
		let acc = [];
        let noacc = [];
		for ( let i = 0; i < count; i++ ) {
            noacc[i] = 0;
        }
		let r = this._row;
		let c = this._col;
		// 定义六个方向的偏移
		let off1 = [ - col + 1, +1, + col, + col -1  ,-1, - col];
		let pos = Math.floor(Math.random() * count);
		noacc[pos] = 1;
		acc.push(pos);
		while(acc.length < count) {
			let pr1 = Utils.getHexagonRow(pos, this._col);
			let pc1 = Utils.getHexagonCol(pos, this._col);

			let arr = [];
			for (let i = 0; i < off1.length; i++) {
				arr[i] = off1[i] + pos;
			}
			var self = this;
			arr = arr.filter((val, index)=> {
				let pr = Utils.getHexagonRow(val, this._col);
				let pc = Utils.getHexagonCol(val, this._col);
				return (index === 0 && (pos - col + 1) >= 0 && pr === pr1 - 1
					|| index === 1 && (pos + 1) < count && pr === pr1  
					|| index === 2 && (pos + col) < count && pr === pr1 + 1
					|| index === 3 && (pos + col - 1) < count && pr === pr1 + 1
					|| index === 4 && (pos - 1) >= 0 && pr === pr1 
					|| index === 5 && (pos - col) >= 0 && pr === pr1 - 1)
					&& noacc[val] === 0;
			});
			if ( arr.length <= 0 ) {
                pos = acc[ Math.floor(Math.random() * acc.length) ];
            } else {
				let ls = arr[Math.floor(Math.random() * arr.length)];
				let offPos = off1.indexOf(ls - pos);
				pos = ls;
				let pr2 = Utils.getHexagonRow(pos, this._col);
				let pc2 = Utils.getHexagonCol(pos, this._col);
                // 相邻空单元中间的位置置0
				let open = 0;
				if (offPos === 0) {
					open = 3;
				} else if (offPos === 1) {
					open = 4;
				} else if (offPos === 2) {
					open = 5;
				} else if (offPos === 3) {
					open = 0;
				} else if (offPos === 4) {
					open = 1;
				} else if (offPos === 5) {
					open = 2;
				}
				this._labyArr[Utils.getHexagonPos(pr1, pc1, this._col)][offPos] = 1;
				this._labyArr[Utils.getHexagonPos(pr2, pc2, this._col)][open] = 1;
                noacc[pos] = 1;
                acc.push(pos);
            }
		}
	}
	private static setEntranceExit() {
		this._labyArr[0][4] = 1;
		this._labyArr[this._labyArr.length - 1][1] = 1;
	}
}