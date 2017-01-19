import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component ({
    selector: 'patron-list',
    template: `
      <ul>
        <li *ngFor="let currentKeg of detailKegList"><h2>{{currentKeg.name}}</h2> <button (click)="showDetailHasBeenClicked(currentKeg)">Show Details</button></li>
      </ul>
    `
  })


export class PatronListComponent {
  @Input() detailKegList: Keg[];
  @Output() detailClickSender = new EventEmitter();

  showDetailHasBeenClicked(kegToShowDetail: Keg) {
    this.detailClickSender.emit(kegToShowDetail);
  }
}
