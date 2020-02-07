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
  constructor() {
    
   }

  ngOnInit() {
  }

}