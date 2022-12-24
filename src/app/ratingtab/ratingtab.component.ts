import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratingtab',
  templateUrl: './ratingtab.component.html',
  styleUrls: ['./ratingtab.component.css']
})
export class RatingtabComponent implements OnInit {

  constructor() { }

  rating:number=0;

  thankyoustatus:boolean=false;
  ngOnInit(): void {
  }
  
  getrating(rating:number){
      this.rating=rating;
  }

  submit(){
    this.thankyoustatus=true;
  }

}
