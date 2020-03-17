import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CountdownServiceService {
  count:number = 1000;
  intervalInstance:any;
  intervalRunning:boolean = false;
  userInput:string = '';
  played:number = 0;
  paused:{count:number,value:Array<number>} = {count : 0, value:[]};
  logs:Array<string> = [];

  constructor() { }

  updateCount(e){
    this.count = e.target.value === '' ? 0 : parseInt(e.target.value);
    this.userInput = e.target.value;
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
