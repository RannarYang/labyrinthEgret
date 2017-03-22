class SuccessViewEvent extends egret.Event{
	public static TAP_NEXT: string = "tap_next";
	public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false)
    {
        super(type,bubbles,cancelable);
    }
}