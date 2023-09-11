import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameLabel:string = '';
  @Input()
  gamePhoto:string = '';
  @Input()
  gameConsole:string = '';
  @Input()
  gamePrice:string = '';
  Id:string = "0";
  constructor() { }

  ngOnInit(): void {
  }

}
