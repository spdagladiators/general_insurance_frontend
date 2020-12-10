import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [  
    { img: "../assets/11.jpeg" },  
    { img: "../assets/22.jpeg" },  
    { img: "../assets/33.jpeg" },
    { img: "../assets/44.jpeg" },
    { img: "../assets/55.jpeg" },
    { img: "../assets/66.jpeg" },
    { img: "../assets/77.jpeg" },
    { img: "../assets/88.jpeg" },
    { img: "../assets/99.jpeg" },
    { img: "../assets/100.jpeg" }
  
  
  
  ];
    slideConfig = {  
      "slidesToShow": 3,  
      "slidesToScroll": 3,  
      "dots": true,  
      "infinite": true  
    }; 
  constructor() { }

  ngOnInit(): void {
  }

}
