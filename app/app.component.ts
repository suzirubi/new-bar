import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Big Bar of Big Beers</h1>
    <h2>Big Beers</h2>

    <patron-list [detailKegList]="masterKegList" (detailClickSender)="detailKeg($event)"></patron-list>

    <patron-detail [detailListDetail]="selectedDetailKeg" (hideDetailButtonClickedSender)="hideDetail()"
></patron-detail>


    <hr>

    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>



    <button (click)="showNewForm()">Add New Keg</button>

    <hr>

    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg [addNewKeg]="newKeg" (newKegSender)="addKeg($event)" (newButtonClickedSender)="finishedNew()"></new-keg>
    <sell-pint [pintSelectedKeg]="selectedKeg"> </sell-pint>

  </div>
  `
})




export class AppComponent {
  selectedDetailKeg = null;

  newKeg = null;

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Bob\'\s Ale', 'Bob Brewery', 50, 6),
    new Keg('Mankiller', 'The Prison Brewery', 10, 20),
    new Keg('Chicken Beer', 'Farmyard', 75, 10),
    new Keg('Weak Water', 'Preschool Brewery', 30, 1),
    new Keg('Wicked Bastard Ale', 'Trump Brewery', 75, 9)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  detailKeg(kegToShowDetail){
    this.selectedDetailKeg = kegToShowDetail;
  }

  hideDetail() {
    this.selectedDetailKeg = null;
  }

  showNewForm(){
    this.newKeg = true;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
  finishedNew() {
    this.newKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

}
