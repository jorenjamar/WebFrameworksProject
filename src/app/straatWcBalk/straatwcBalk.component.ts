import { Component } from "@angular/core";
import { WcService, IWc } from "../services/wc.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector:'app-straatWcBalk',
    templateUrl:'./straatWcBalk.component.html'
})

export class StraatWcBalkComponent implements OnInit{
    data : IwcStraat[];
    
    constructor(private service : WcService){}
    
    ngOnInit(){
        this.service.getLijst().subscribe(result => this.data = this.extractData("Minderbroedersstraat", result));
        
    }

    extractData(straat : string, tussen : IWc) : IwcStraat[] {
        if(tussen != null){
            var tussenData = tussen.data;
            this.data = new Array(tussenData.length);
            var eind : IwcStraat[] = new Array(tussenData.length);

            /*for(var i = 0; i < tussenData.length-1; i++){
                eind.push({
                    id : i,
                    straat : tussenData[i].straat,
                    huisnr : tussenData[i].huisnummer,
                    postcode : tussenData[i].postcode,
                    district : tussenData[i].district,
                })
            }*/
            eind.push({id : 1, straat : "a", huisnr : "a", postcode : "a", district : "a"});
            eind.push({id : 2, straat : "b", huisnr : "b", postcode : "b", district : "b"});
        }
        
        return eind;
    }
}
interface IwcStraat{
    id : number,
    straat : string,
    huisnr : string,
    postcode: string,
    district: string
}

