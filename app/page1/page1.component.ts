import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  sorcier = 'Azhim';
  bookPictureUrl = 'https://pbs.twimg.com/profile_images/791642012936200192/hOA2XMnZ_400x400.jpg';
  totalPoint = 10;
  sornot=this.totalPoint>1?"s":"";
  competences = [0,0,0,0,0,0,0,0,0];

 constructor(private http: HttpClient) {}

  getNbPoint() {
    return this.http.get("https://sports-cars-accountable-civet.cfapps.io/api/cars/search/A7%20SPORTBACK").subscribe(
      result => {
        this.totalPoint = parseInt(result[0].id);
      },
      error => {
        console.error(error);
      }
    );
  }

  onIncrement(n)
  {
     if(this.totalPoint>0){
      this.competences[n]++;
      this.totalPoint--;
      this.sornot=this.totalPoint>1?"s":""
    }
  }

  onDecrement(n)
  {
    if(this.competences[n]>0)
    {
      this.competences[n]--;
      this.totalPoint++;
      this.sornot=this.totalPoint>1?"s":""
    }
  }

  ngOnInit() {
    this.getNbPoint();
  }

}