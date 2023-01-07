import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstangularapplication';
  constructor(private demo: DemoService){
    let message = this.demo.mahadev();
    console.log(message); 
  }
}
