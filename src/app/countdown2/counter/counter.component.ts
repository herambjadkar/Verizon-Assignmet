import { Component, OnInit } from '@angular/core';
import { CountdownServiceService } from 'src/app/countdown-service.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  countdownService:CountdownServiceService;

  constructor(private countdownservice:CountdownServiceService) {
    this.countdownService = countdownservice;
  }

  ngOnInit() {}

}
