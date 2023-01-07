import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
passDataFromParent: any = {};
person: any = [{
  name: 'guru',
  age: '22'
  },
  {
    name: 'karthi',
    age: '21'
  },
  {
    name:'balaguru',
    age:'20',
  },
  {
    name: 'mahadev',
    age: '19'
  },
  {
    name: 'ajith',
    age: '14'
  }

];

receivedData(data: any){
  console.log(data, 'parent====================');
  this.passDataFromParent = data;
}

}
