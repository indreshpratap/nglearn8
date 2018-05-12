import {Component} from '@angular/core';

@Component({
selector:"app-property-binding",
templateUrl:'./property-binding.component.html',
styles:['.rowgen001 { border:1px solid; padding:5px}',
' #rowgen001{ background:white;color:black; }']
})
export class PropertyBindingComponent {
    genid = "rowgen001";

    description = "This is a property binding component";
}