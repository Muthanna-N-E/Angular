import { style } from '@angular/animations';
import { Directive, ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { 
    el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="lightblue";
    
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'font-style','italic');
  }
  @HostBinding("style.backgroundColor") bgColor;
@HostListener('mouseenter') mouseEnter(){
  this.changeColor("blue");
  this,this.bgColor="khaki"
}
changeColor(color){
  this.el.nativeElement.style.color=color;

}
@HostListener('mouseleave') mouseLeave(){
  this.changeLeaveColor("red");
}
changeLeaveColor(color){
  this.el.nativeElement.style.color=color;
}

dateExmp=Date();

}
