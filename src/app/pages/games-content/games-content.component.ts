import { Component, OnInit, Input } from '@angular/core';
import {  data  } from '../../data/dataFake'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-content',
  templateUrl: './games-content.component.html',
  styleUrls: ['./games-content.component.css']
})
export class GamesContentComponent implements OnInit {
  @Input()
  console:string = ''
  @Input()
  title:string = ''
  @Input()
  photo:string = ''
  @Input()
  price:string = ''
  private id:string | null = ""
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

      this.setValueToComponent(this.id)
  }
  setValueToComponent(id:string | null){
    const result = data.filter(article => article.id == id)[0]
    this.title = result.title
    this.photo = result.img
    this.price = result.price
    this.console = result.console
  }
}
