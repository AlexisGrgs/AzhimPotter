import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  sorcier = 'Azhim';
  bookPictureUrl = 'https://pbs.twimg.com/profile_images/791642012936200192/hOA2XMnZ_400x400.jpg';
  isAvailable = false;
  isValid = true;
  isImportant=true;
  totalPoint = 10;
  counter = 0;
  competences = [0,0,0,0,0,0,0,0,0];

  big()
  {
    if(this.isImportant){
      var retour = 2;
    }
    else
    {
      var retour = 1;
    }
    this.isImportant=!this.isImportant;
    return retour;
  }
  buy(){
    console.log("salut");
  }

  onIncrement(n)
  {
     if(this.totalPoint>0){
      this.competences[n]++;
      this.totalPoint--;
    }
  }

  onDecrement(n)
  {
    if(this.competences[n]>0)
    {
      this.competences[n]--;
      this.totalPoint++;
    }
  }
  constructor() {
    
   }


  ngOnInit() {
  }

}