
import { Component } from '@angular/core';
import { courses } from './courses';
import {CustomDirective} from './custom.directives'

@Component({
  selector: 'app-course',
  template: `
  <ul>
  <li *ngFor="let sub of coursesarray">{{sub}}</li>
  </ul>  
  <h1   
  [ngStyle]="{color:Isactive ?'green':'red'}"(click)="IsactiveFun()"> {{name}} </h1> 

  <span class="fa fa-3x" 
  [class.fa-heart]="!activeHeart"
  [class.fa-heart-o]="activeHeart"
  (click)="IsactiveHeart()"  
  ></span>

  <p CCDirective>{{para |content:'15'}}</p>
    
  `,
  styles: [`
  h1{
    color:green;
  }
  `]
})
export class CourseComponent {
  public Isactive :boolean=true;
  public activeHeart:boolean=true;
  public name:string = 'Nilima course';
  public coursesarray:Array<string>;
  public para:string="India's biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Home, Furniture, Grocery, Jewelry, Sporting goods";
  //public subject:Array<string>=['html','angular','typescript','English']

  constructor()
  {
      let coures =new courses();
    this.coursesarray=coures.Getcoures();
  }

  IsactiveFun()
  {
    this.Isactive=!this.Isactive;
  }

  IsactiveHeart()
  {
    this.activeHeart=!this.activeHeart;
  }

  

}
