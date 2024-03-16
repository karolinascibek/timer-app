import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appOutline]'
})
export class OutlineDirective {

  inputElement!: HTMLInputElement;
  focusEvent!: boolean;
  focusOutEvent!: boolean;
  mask: string = '__:__'
  counter: number = 0;
  isBackspace: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.inputElement = this.el.nativeElement as HTMLInputElement;
    this.inputElement.value = this.mask;
  }

  addOutlineStyle() {
    this.el.nativeElement.style.outline = '2px solid red';
  }

  cursorCoords(valueMask: string[]) {
    let oldStart = this.inputElement.selectionStart;
    let oldEnd = this.inputElement.selectionEnd;

    valueMask.forEach((el, i)=>{
      console.log({charValueMAsk: el})
      if(this.mask[i] !== '_' && !this.isBackspace) {
        if(!oldEnd || !oldStart ) return;
        oldEnd++;
        oldStart++;
      }
    })

    return [ oldStart, oldEnd];
  }

  prepareValue(mask: string[], value: string[]): string {
    return mask.map((char, i)=>{
      if(char !== '_') return char;
      if(value.length === 0) return char;
      return value.shift();
    }).join('');
  }

  isNumber(char: string): boolean {
    console.log({char: char, is: !isNaN(+char)})
    return !isNaN(+char);
  }

   @HostListener('input', ['$event']) onFocusout($event: KeyboardEvent){

    const valueMask = this.inputElement.value.split('').filter(this.isNumber);
    let [oldStart, oldEnd]  = this.cursorCoords(valueMask);

    const spiltMask = this.mask.split('');
    this.inputElement.value = this.prepareValue(spiltMask, valueMask);

    this.inputElement.setSelectionRange(oldStart,  oldEnd);
    this.isBackspace = false;
  }

  @HostListener('keydown', ['$event']) onInput($event: KeyboardEvent){
    if($event.key === 'Backspace') {
      this.isBackspace = true;
    }
  }
}
