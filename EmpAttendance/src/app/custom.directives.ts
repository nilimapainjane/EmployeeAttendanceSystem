import {Directive,ElementRef,Renderer2,HostListener} from "@angular/core";

@Directive({
    selector:'[CCDirective]'
})
export class CustomDirective{

    constructor(private e1:ElementRef,private RD:Renderer2)
    {
      RD.setStyle(e1.nativeElement,'backgroundColor','Red');
    }
    @HostListener('mousemove') onmousemove()
    {
        this.RD.setStyle(this.e1.nativeElement,'backgrounColor','green');
        this.RD.setStyle(this.e1.nativeElement,'fontSize','40px');
        this.RD.setStyle(this.e1.nativeElement,'color','pink');
    }

    @HostListener('mouseout') onmouseout()
    {
        this.RD.setStyle(this.e1.nativeElement,'backgrounColor','white');
        this.RD.setStyle(this.e1.nativeElement,'fontSize','20px');
        this.RD.setStyle(this.e1.nativeElement,'color','black');
    }
}