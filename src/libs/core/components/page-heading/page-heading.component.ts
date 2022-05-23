import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
  host: {
    role: 'section'
  }
})
export class PageHeadingComponent implements OnInit {

  @Input()
  text: string = '';

  @Input()
  buttonText: string = '';

  @Output()
  buttonClicked: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
