import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { VervoerComponent } from './vervoer/vervoer.component';
import { NavSecondComponent } from './navSecond/navSecond.component';
import { UitlegComponent } from './uitleg/uitleg.component';
import { UitlegBas } from './uitlegBas/uitlegBas.component';
import { UitlegJoren } from './uitlegJoren/uitlegJoren.component';
import { DichtsteWcComponent } from './dichtsteWc/dichtsteWc.component';
import { DichtsteWcBalkComponent } from './dichtsteWcBalk/dichtsteWcBalk.component';
import { WcService } from './services/wc.service';
import { HttpClientModule } from '@angular/common/http';
import { buurtWcComponent } from './buurtWc/buurtWc.component';
import { StraatWcComponent } from './straatWc/straatWc.component';
import { RolstoelWcComponent } from './rolstroelWc/rolstoelWc.component';
import { StraatWcBalkComponent } from './straatWcBalk/straatwcBalk.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GroupComponent,
    VervoerComponent,
    NavSecondComponent,
    UitlegComponent,
    UitlegBas,
    UitlegJoren,
    DichtsteWcComponent,
    DichtsteWcBalkComponent,
    buurtWcComponent,
    StraatWcComponent,
    RolstoelWcComponent,
    StraatWcBalkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component : HomeComponent},
      {path: "vervoer", component : VervoerComponent},
      {path: "dichtsteWc", component : DichtsteWcComponent},
      {path: "buurtWc", component : buurtWcComponent},
      {path: "rolstoelWc", component : RolstoelWcComponent},
      {path: "straatWc", component: StraatWcComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
    ], {useHash: true}),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [WcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
