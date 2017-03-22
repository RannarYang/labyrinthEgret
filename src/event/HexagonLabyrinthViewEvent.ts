class HexagonLabyrinthViewEvent extends egret.Event {
	public static SUCCESS: string = "success";
	public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false)
    {
        super(type,bubbles,cancelable);
    }
}