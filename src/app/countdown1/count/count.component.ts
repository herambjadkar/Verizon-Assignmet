import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  @Input() played:number;
  @Input() paused:number;

  constructor() { }

  ngOnInit() {
  }

}
