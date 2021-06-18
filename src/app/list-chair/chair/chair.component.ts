import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {

  @Input() chair:any;

  @Output() eventChoice = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  Choice(){
    this.eventChoice.emit(this.chair)
  }
}
