import { Component, OnInit } from '@angular/core';
import { MuseaService, IMusea } from '../../services/musea.service';
@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html'
})
export class MuseumComponent implements OnInit {
    data : IMusea;
    
    constructor(private service : MuseaService){}

    private _search : string;
    ngOnInit() {
      this.service.getLijst().subscribe(result => this.data = result);
      //this.service.getLijst().subscribe(result => this.data = this.MapResult(result));
    }
    get museumSearch(){
      return this._search;
    }
    set museumSearch(value : string){
      this._search = value;
    }
    private MapResult(result : IMusea) : IMuseum{
      return{
          id : result.data[0].id,
          naam : result.data[0].naam,
          thema : result.data[0].thema,
          type : result.data[0].type,
          straat : result.data[0].straat,
          huisnr : result.data[0].huisnummer,
          district : result.data[0].district
      }
          
  }
}
interface IMuseum{
    id : string,
    naam : string,
    thema : string,
    type : string,
    straat: string,
    huisnr: string,
    district: string
}
