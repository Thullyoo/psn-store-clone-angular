import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  @Input()
  console:string = ''
  @Input()
  title:string = ''
  @Input()
  photo:string = ''
  @Input()
  price:string = ''
  Id:string | any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
