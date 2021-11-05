import { Component, VERSION } from '@angular/core';
import { MChild } from './child.model';
//import {MChild} from '.child.model.ts';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //public firstChild: MChild;
  //public secondChild:MChild;
  //public thridChild:MChild
public mychilds:MChild[]=[];

  constructor() {
    this.mychilds.push({name:'Ayesha Waqar', age:10});
    this.mychilds.push({name:'Wania Waqar', age:8});
    this.mychilds.push({name:'Anshara Waqar', age:6});
    this.mychilds.push({name:'Umar Waqar', age:5});
  //  this.firstChild = {name:'Ayesha Waqar', age:10};
  //   this.firstChild.name = 'Ayesha Waqar';
  //   this.firstChild.age = 10;
  //   this.mychilds.push( this.firstChild );
 //   this.secondChild = {name:'wania waqar', age:8};
    // this.secondChild.name = 'Wania Waqar';
    // this.secondChild.age = 8;
 //   this.thridChild = {name:'Ansharah waqar', age:6};
    // this.thridChild.name = 'Ansharah Waqar';
    // this.thridChild.age = 6;
  }
  //public name: string = 'Angular ';
  // public firstChild: string = 'Ayesha Waqar';
  // public firstChildAge: number = 10;
}
