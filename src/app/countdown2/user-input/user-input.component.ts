import { Component, OnInit } from '@angular/core';
import { CountdownServiceService } from 'src/app/countdown-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  countdownService:CountdownServiceService;

  constructor(private countdownservice:CountdownServiceService) {
    this.countdownService = countdownservice;
  }
  ngOnInit() {
  }

}
