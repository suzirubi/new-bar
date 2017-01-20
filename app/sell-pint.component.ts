import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'sell-pint',
  template: `
  <button (click)="pintHasBeenSold(currentKeg)">Sell Pint</button>
  `
})

export class SellPintComponent {
  @Input() pintSold: Keg;
  @Output() pintHasBeenSoldClickedSender = new EventEmitter();

  pintHasBeenSold(kegToSellPintFrom: Keg) {
    this.pintHasBeenSoldClickedSender.emit(kegToSellPintFrom);
    alert("click on pint has been sold");
  }

}
