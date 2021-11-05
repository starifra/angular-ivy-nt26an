import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public firstChild: MChild;
  constructor() {
    this.firstChild.name = 'Ayesha Waqar';
    this.firstChild.age = 10;
  }
  //public name: string = 'Angular ';
  // public firstChild: string = 'Ayesha Waqar';
  // public firstChildAge: number = 10;
}
