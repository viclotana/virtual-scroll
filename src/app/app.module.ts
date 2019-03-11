import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsComponent } from './artists/artists.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
