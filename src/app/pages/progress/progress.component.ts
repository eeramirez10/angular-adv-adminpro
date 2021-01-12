import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls:['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1:Number = 80;
  progreso2:Number = 35;

  btnProgreso1:string = "btn btn-primary"

  btnProgreso2:string = "btn btn-info"

  constructor() { }

  ngOnInit(): void {
  }

  get getProgreso1(){
    return `${this.progreso1}%`
  }

  get getProgreso2(){
    return `${this.progreso2}%`
  }




}
