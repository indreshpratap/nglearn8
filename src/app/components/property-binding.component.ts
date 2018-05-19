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

  colors;

  constructor() {
    this.colors = ["White", "Green", "Yellow"];
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
    console.log(input.value);
    this.colors.push(input.value);
    input.value='';
  }

  deleteColor(indx) {
    if (confirm("Are you sure?")) {
      this.colors.splice(indx, 1);
    }
  }
}
