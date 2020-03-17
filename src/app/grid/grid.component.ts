import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cols:Number = 4;
  grid:boolean = true;


  constructor() {}

  ngOnInit() {
  }

  switchCol(num:Number,status:string){
    this.cols = num;
    if(status === 'list'){
      this.grid = false;
    }else{
      this.grid = true;
    }

  }
}
