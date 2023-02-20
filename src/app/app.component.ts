import { Component, Input, OnInit } from '@angular/core';

interface CardI{
  title:string,
  subtitle:string,
  image?:string,
  like?:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
;
  title = 'MyFirstApp';
  public cards:CardI[]=[]

  ngOnInit(): void {
    this.cards.push(
      {title:'Video 1', subtitle: 'Subtitulo Video 1', image:"https://i.ytimg.com/vi/PSD5pFi6bx4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRXrJxTLALTsBas1djapMjtW0lQg",like : 0},
      {title:'Video 2', subtitle: 'Subtitulo Video 2', image:"https://i.ytimg.com/vi/rOsd3OI9dOA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdMDLcELCLzlSzVoELr-QZ41mL8g",like : 0},
      {title:'Video 3', subtitle: 'Subtitulo Video 3', image:"https://i.ytimg.com/vi/lasGrvRYBWg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgh8fipV-k2f4xjEEPpvvtiWHwjA",like : 0},
    )
  }
}
