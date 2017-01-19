import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
		<h3>New Keg</h3>
    <div>
  		<label>New Keg Name:</label>
  		<input #newName>
    </div>
    <div>
  		<label>New Keg Brand:</label>
  		<input #newBrand>
    </div>
    <div>
  		<label>New Keg Price:</label>
  		<input #newPrice>
    </div>
    <div>
  		<label>New Keg Alcohol Content:</label>
  		<input #newAlcoholContent>
  		<button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {

  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }

}
