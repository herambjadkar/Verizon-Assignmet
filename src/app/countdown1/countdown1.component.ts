import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown1',
  templateUrl: './countdown1.component.html',
  styleUrls: ['./countdown1.component.scss']
})
export class Countdown1Component implements OnInit {
  count:number = 1000;
  intervalInstance:any;
  intervalRunning:boolean = false;
  userInput:string = '';
  played:number = 0;
  paused:{count:number,value:Array<number>} = {count : 0, value:[]};
  logs:Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

  updateCount(value:string){
    this.count = value === '' ? 0 : parseInt(value);
    this.userInput = value;
  }

  updateCounter(){
    this.count = this.count - 1;
  }

  startCounter(){
    this.intervalInstance = setInterval(() => {
      this.updateCounter()
    },1000);
    this.intervalRunning = true;
    this.userInput = '';
    this.played++;
    this.logs.push('Started at '+new Date().toLocaleString());
  }

  pauseInterval(){
    clearInterval(this.intervalInstance);
    this.intervalRunning = false;
    this.logs.push('Paused at '+new Date().toLocaleString());
    this.paused.count++;
    this.paused.value.push(this.count);
  }

  onPlayClicked(event:string){
    if(event === "play"){
      this.startCounter()
    }else{
      this.pauseInterval()
    }
  }

  reset(){
    this.count = 0;
    if(this.intervalRunning){
      clearInterval(this.intervalInstance);
    }
    this.intervalRunning = false;
    this.userInput = '';
    this.played = 0;
    this.paused.count = 0;
    this.paused.value.splice(0,this.paused.value.length);
    this.logs.splice(0,this.logs.length)
  }
}
