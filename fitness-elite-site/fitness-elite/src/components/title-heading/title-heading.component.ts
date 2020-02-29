import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'title-heading',
  templateUrl: './title-heading.component.html',
  styleUrls: ['./title-heading.component.css']
})

export class TitleHeadingComponent implements OnInit {

  @Input() title: string = 'TITLE_HERE';

  constructor() { }

  ngOnInit() {
  }

}
