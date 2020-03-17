import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-count',
  templateUrl: './get-count.component.html',
  styleUrls: ['./get-count.component.scss']
})
export class GetCountComponent implements OnInit {
  @Input() valueInput:any;
  @Output() userCount = new EventEmitter<any>();
  @Output() onReset = new EventEmitter();
  @Output() onPlay = new EventEmitter<string>();
  play:boolean = true;
  @Input() pausedValues:[];
  constructor() { }

  ngOnInit() {}

  updateCount(e){
    this.userCount.emit(e.target.value);
  }

  reset(){
    this.onReset.emit();
    this.play = true;
  }

  Play(){
    if(this.play){
      this.onPlay.emit('play')
      this.play = false;
    }else{
      this.onPlay.emit('Pause');
      this.play = true;
    }
  }
}
