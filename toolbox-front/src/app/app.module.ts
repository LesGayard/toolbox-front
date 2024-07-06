import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MenuComponent} from "./menu/menu.component";


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    MenuComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,// register FullCalendar with your app
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
