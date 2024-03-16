import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputMask]'
})
export class InputMaskDirective implements OnInit {

  @Input() mask: string = '__:__';
  @Input() inputPattern: string = '_';

  inputElement!: HTMLInputElement;
  isBackspace: boolean = false;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    console.log({mask: this.mask, patter: this.inputPattern})
    this.inputElement = this.el.nativeElement as HTMLInputElement;
    this.inputElement.value = this.mask;
  }

  cursorCoords(valueMask: string[]) {
    let oldStart = this.inputElement.selectionStart;
    let oldEnd = this.inputElement.selectionEnd;

    valueMask.forEach((el, i)=>{
      console.log({charValueMAsk: el})
      if(this.mask[i] !== this.inputPattern && !this.isBackspace) {
        if(!oldEnd || !oldStart ) return;
        oldEnd++;
        oldStart++;
      }
    })

    return [ oldStart, oldEnd];
  }

  prepareValue(mask: string[], value: string[]): string {
    return mask.map((char, i)=>{
      if(char !== this.inputPattern) return char;
      if(value.length === 0) return char;
      return value.shift();
    }).join('');
  }

  isNumber(char: string): boolean {
    console.log({char: char, is: !isNaN(+char)})
    return !isNaN(+char);
  }

   @HostListener('input', ['$event']) onFocusout($event: KeyboardEvent){

    let valueMask = this.inputElement.value.split('').filter(this.isNumber);

    let [oldStart, oldEnd]  = this.cursorCoords(valueMask);

    const spiltMask = this.mask.split('');
    this.inputElement.value = this.prepareValue(spiltMask, valueMask);

    console.log({value: this.inputElement.value})
    this.inputElement.setSelectionRange(oldStart,  oldEnd);
    this.isBackspace = false;
  }

  @HostListener('keydown', ['$event']) onInput($event: KeyboardEvent){
    if($event.key === 'Backspace') {
      this.isBackspace = true;
    }
  }

}
