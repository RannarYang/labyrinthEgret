class HexagonLabyrinth implements LabyrinthImp{
	private _row: number;
	private _col: number;
	private _linkArr :boolean[] = [];
	private _dataArr: number[][][] = [];
	public constructor(row, col) {
		console.log('create HexagonLabyrinth');
		this._row = row;
		this._col = col;
		this.init();
	}
	public getEntrance() {

	} 
	// 获取迷宫出口
	public getExit() {

	}
	// 生成迷宫的算法
	public createLabyrinth() {

	}
	// 作弊
	public getLabyrinthLine() {

	}
	public getLabyArr() {
		return this._dataArr;
	}
	private init() {
		this.initLabyrinthArr();
		this.makeLink();
	}
	private initLabyrinthArr() {
		// console.log('initLabyrinthArr');
		let row = this._row;
		let col = this._col;
		let count = row * col;
		let linkArr = this._linkArr = [];
		for (let i = 0; i < count; i++) {
			linkArr[i] = false; //全部都处于不连通状态
		}
		let dataArr = this._dataArr = [];
		for (let i = 0; i < row; i++) {
			dataArr[i] = [];
			for(let j = 0; j < col; j++) {
				dataArr[i][j] = [0, 0, 0, 0, 0, 0];
			}
		}
	}
	private makeLink() {
		// console.log('makeLink');
		let row = this._row;
		let col = this._col;
		let count = row * col;
		
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
			let pr1 = pos / c | 0;
			let pc1 = pos % c;

			let arr = [];
			for (let i = 0; i < off1.length; i++) {
				arr[i] = off1[i] + pos;
			}
			arr = arr.filter(function(val, index) {
				let pr = val / c | 0;
				let pc = val % c;
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
            }else {
				let ls = arr[Math.floor(Math.random() * arr.length)];
				let offPos = off1.indexOf(ls - pos);
				pos = ls;
				let pr2 = pos / c | 0;
				let pc2 = pos % c;
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
                this._dataArr[ pr1 ][ pc1 ][ offPos ] = 1;
                this._dataArr[ pr2 ][ pc2 ][ open ] = 1;
                
                noacc[pos] = 1;
                acc.push(pos);
            }
		}
	}
}