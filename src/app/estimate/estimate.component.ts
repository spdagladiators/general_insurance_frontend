import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {
  currDiv: string = '';

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
