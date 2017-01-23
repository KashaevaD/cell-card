import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() img: any;

  @Output()
  removeCard: EventEmitter<any> = new EventEmitter();

  public currentOpened:any[] = [];

  public clickCard(i) {
    this.img.isOpen = !this.img.isOpen;
    this.removeCard.emit(this.img);
     
    }
    
  

}
