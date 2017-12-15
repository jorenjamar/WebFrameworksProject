import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { JorenComponent } from './joren/joren.component';
import { BasComponent } from './bas/bas.component';
import { WcComponent } from './wc/wc.component';
import { VervoerComponent } from './vervoer/vervoer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    JorenComponent,
    BasComponent,
    WcComponent,
    VervoerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "home", component : HomeComponent},
      {path: "wc", component : WcComponent},
      {path: "vervoer", component : VervoerComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
    ], {useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
