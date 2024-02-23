import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Comp2Component {

}

// There are 3 types of View Encapsulation :
// 1.View Encapsulation.None ->
// If We uses it,that means WHATEVER CSS STYLE WE HAVE SPECIFIED FOR THIS BUTTON ELEMENT,
// WILL BE APPLIE TO ALL THE BUTTON ELEMENTS OF THE CHILD COMPONENT

// 2.View Encapsulation.Emulated -> by Default
// If We uses it,that means UNIQUE ATTRIBUTE WILL BE USED

// 3.View Encapsulation.ShadowDom ->
// If We uses it,that means COMPONENT CREATES IT'S OWN DOM,THE BROWSER KEEPS SHADOW DOM
// SEPARATE FROM THE MAIN DOM! IN THIS WAY WE ACHIEVE TRUE ENCAPSULATION USING SHADOW DOM
