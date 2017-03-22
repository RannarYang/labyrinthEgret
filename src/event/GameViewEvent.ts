class GameViewEvent extends egret.Event{
	public static TAP_REPLAY: string = "tap_replay";
	public static TAP_TIPS: string = "tap_tips";
	public static TAP_NEXT: string = "tap_next";
	public static SUCCESS: string = "success";
	public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false)
    {
        super(type,bubbles,cancelable);
    }
}