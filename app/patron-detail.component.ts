import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'patron-detail',
  template: `
	<div>
  	<div *ngIf="detailListDetail">
  		<h3>{{detailListDetail.name}}</h3>
      <h6>{{detailListDetail.brand}}</h6>
      <h6>{{detailListDetail.price}}</h6>
      <h6>{{detailListDetail.alcoholContent}}</h6>

      <button (click)="hideDetailButtonClicked()">Hide Details</button>
  	</div>
  </div>
  `
})

export class PatronDetailComponent {

  @Input() detailListDetail: Keg;

  @Output() hideDetailButtonClickedSender = new EventEmitter();

  hideDetailButtonClicked() {
  	this.hideDetailButtonClickedSender.emit();
  }

}
