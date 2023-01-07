import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit{
ajith: number = 122121; 
list: any = ['aaa', 'bbb', 'ccc'];
isCheck: boolean = true;
fontcolor: string = 'blue';
getDataFromService: any = [];

constructor(private demo: DemoService){

}

ngOnInit(): void{
  this.demo.getData().subscribe((data: any)=>{
    this.getDataFromService = data.entries;
    console.log(this.getDataFromService);
  })
}

clickfunction(){
  let message = this.demo.mahadev();
  console.log(message); 
  this.isCheck = !this.isCheck;
  console.log(this.isCheck);
}

changecolor(getcolor:string){
  this.fontcolor = getcolor;
}

}
