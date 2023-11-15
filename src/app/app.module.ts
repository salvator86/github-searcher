import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./core/components/header/header.component";
import {SearchBarComponent} from "./features/components/search-bar/search-bar.component";
import {RepListComponent} from "./features/components/rep-list/rep-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderComponent,
    SearchBarComponent,
    RepListComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
