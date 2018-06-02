import { Component } from "@angular/core";

@Component({
  selector: "app-property-binding",
  templateUrl: "./property-binding.component.html",
  styles: [
    ".rowgen001 { border:1px solid; padding:5px}",
    " #rowgen001{ background:white;color:black; }",
    "ul {margin-top:15px;} ul li{ padding:5px;border:1px solid lightgray;}",
    " li::after {overflow:hidden;clear:both;content:'';display:block} ",
    "li span {float:left;}li button{float:right}",
    ".even {background-color:lightgray} .odd {background-color:lightgreen}"
  ]
})
export class PropertyBindingComponent {
  genid = "rowgen001";
  description = "This is a property binding component";
  stateCls="";

  clsArray=[];

  myStyle:any={};

  clsObj;
  colors;
  msgtype=0;

  constructor() {
    this.colors = ["White", "Green", "Yellow"];
    this.clsObj = {
      "is-warning":false,
      "is-4":false,
      
    }
  }

  doSave() {
    alert("Data saved");
    this.genid = "rowgen002";
  }

  doClickEvent(event) {
    console.log(event);
  }

  onEnter(event, info) {
    console.log(info, event);
  }

  addColor(input) {
    if(input.value){
    console.log(input.value);
    this.colors.push(input.value);
    input.value='';
    }else {
      alert("Please input a color!");
    }
  }

  deleteColor(indx) {
    if (confirm("Are you sure?")) {
      this.colors.splice(indx, 1);
    }
  }

  changeState(cls){
    this.stateCls = cls;
  }

  addBorder(){

  }

  pushToArray(){
    this.clsArray.push('is-info');
    this.clsArray.push('is-size-3');
  }

  addSize(){
  this.clsArray.push('is-3');
  }
  clearArray(){
    this.clsArray =[];
  }

  toggleWarning() {
    this.clsObj['is-warning']= ! this.clsObj['is-warning'];
  }
  
  toggleColumn() {
    
    this.clsObj['is-4']= ! this.clsObj['is-4'];
  }

  addStyle(key,value){
    this.myStyle[key]=value;
  }

  addMultiple() {
    this.myStyle.width="80%";
    this.myStyle.height="300px";
    this.myStyle.cursor="pointer";
    this.myStyle.color="red";

  }

  toggleMsgType(type){
    this.msgtype = type;
  }
}
