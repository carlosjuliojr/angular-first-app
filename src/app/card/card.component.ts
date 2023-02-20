import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data_in_card:any
  title:string = "Angular's course interpolation"
  image:string = "https://photoshop-kopona.com/uploads/posts/2019-05/1559108923_0-2.jpg"

  constructor() { }

  ngOnInit(): void {
  }

  addLike():void {
    this.data_in_card.like+=1;
  }

}
