import { Component, VERSION } from '@angular/core';
import { MChild } from './child.model';
//import {MChild} from '.child.model.ts';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public firstChild: MChild;
  public secondChild:MChild;
  public thridChild:MChild

  constructor() {
    this.firstChild = new MChild();
    this.firstChild.name = 'Ayesha Waqar';
    this.firstChild.age = 10;
    this.secondChild = new MChild();
    this.secondChild.name = 'Wania Waqar';
    this.secondChild.age = 8;
    this.thridChild = new MChild();
    this.thridChild.name = 'Wania Waqar';
    this.thridChild.age = 8;
  }
  //public name: string = 'Angular ';
  // public firstChild: string = 'Ayesha Waqar';
  // public firstChildAge: number = 10;
}
