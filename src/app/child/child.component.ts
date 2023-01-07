import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() getDataFromParent: any = [];
@Output() childToParent = new EventEmitter<string>();

checkName(person: any){
  console.log(person);
  this.childToParent.emit(person);
}

}
