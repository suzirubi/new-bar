import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { PatronListComponent } from './patron-list.component'
import { PatronDetailComponent } from './patron-detail.component'



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, EditKegComponent, NewKegComponent, PatronListComponent, PatronDetailComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
