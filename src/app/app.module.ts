import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgCytoscapeModule} from "ng2-cytoscape/dist";

import { AppComponent } from './app.component';
import { CytoscapeComponent } from './cytoscape/cytoscape.component';

@NgModule({
  declarations: [
    AppComponent,
    CytoscapeComponent
  ],
  imports: [
    BrowserModule,
    NgCytoscapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
