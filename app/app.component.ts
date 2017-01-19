import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Big Bar of Big Beers</h1>
    <h2>Big Beers</h2>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSender)="addNewKeg($event)"></keg-list>
    <button (click)="showNewForm()">Add New Keg</button>

    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg [addNewKeg]="newKeg" (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})


export class AppComponent {

  newKeg = null;

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Bob Ale', 'Bob Brewery', 50, 6),
    new Keg('Mankiller', 'The Prison Brewery', 10, 20),
    new Keg('Chicken Beer', 'Farmyard', 75, 10),
    new Keg('Weak Water', 'Preschool Brewery', 30, 1),
    new Keg('Wicked Bastard Ale', 'Trump Brewery', 75, 9)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  showNewForm(){
    this.newKeg = true;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }



}
