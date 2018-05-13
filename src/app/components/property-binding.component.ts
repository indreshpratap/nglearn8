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

    colors;

    constructor(){
        this.colors = ['White','Green','Yellow'];
    }

    doSave(){
     alert("Data saved");
     this.genid = "rowgen002";
    }

    doClickEvent(event){
        console.log(event);
        
    }

    onEnter(event,info){
        console.log(info, event);
    }

    addColor(input){
        console.log(input.value);
        this.colors.push(input.value);
    }
}