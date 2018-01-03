import { Component, OnInit } from '@angular/core';
import { VeloPuntenService, IVeloPunten } from '../../services/velopunten.service';

@Component({
  selector: 'app-velo-punt',
  templateUrl: './velo-punt.component.html'
})
export class VeloPuntComponent implements OnInit {
    data : IVeloPunten;
    
    constructor(private service : VeloPuntenService){}

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
    private MapResult(result : IVeloPunten) : IVeloPunt{
      return{
          id : result.data[0].id,
          straatnaam : result.data[0].straatnaam,
          huisnummer : result.data[0].huisnummer,
          postcode : result.data[0].postcode,
          district : result.data[0].district
      }
          
  }
}
interface IVeloPunt{
    id : number,
    straatnaam : string,
    huisnummer : string,
    postcode : string,
    district: string
}
