import { Component, OnInit } from '@angular/core';
import { CountdownServiceService } from 'src/app/countdown-service.service';

@Component({
  selector: 'app-log-counter',
  templateUrl: './log-counter.component.html',
  styleUrls: ['./log-counter.component.scss']
})
export class LogCounterComponent implements OnInit {
  countdownService:CountdownServiceService;

  constructor(private countdownservice:CountdownServiceService) {
    this.countdownService = countdownservice;
  }

  ngOnInit() {
  }

}
