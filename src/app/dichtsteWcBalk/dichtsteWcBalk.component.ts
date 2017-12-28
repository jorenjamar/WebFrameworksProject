import { Component } from "@angular/core";


@Component({
    selector: "app-dichtsteWcBalk",
    templateUrl: "./dichtsteWcBalk.component.html"
})

export class DichtsteWcBalkComponent{
    data: IDichtstbijzijnde = {
        distance : 200,
        location : "Borzestraat 10 2000 Antwerpen"
    }
}

interface IDichtstbijzijnde{
    distance : number,
    location : string
}