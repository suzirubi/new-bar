import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
	<div>
  	<div *ngIf="childSelectedKeg">
  		<h3>Edit {{childSelectedKeg.name}}</h3>
  		<label>Edit Keg Name:</label>
  		<input [(ngModel)]="childSelectedKeg.name">
  		<label>Edit Keg Brand:</label>
  		<input [(ngModel)]="childSelectedKeg.brand">
  		<label>Edit Keg Price:</label>
  		<input [(ngModel)]="childSelectedKeg.price">
  		<label>Edit Keg Alcohol Content:</label>
  		<input [(ngModel)]="childSelectedKeg.alcoholContent">
  		<button (click)="doneButtonClicked()">Done</button>
  	</div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;

  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  	this.doneButtonClickedSender.emit();
  }
}
