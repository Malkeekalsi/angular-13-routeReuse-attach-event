import { Component, OnInit } from '@angular/core';
import { OnRouteReuse } from './interface-test';

@Component({
  template: `
    SIBLING COMPONENT <input>
  `,
})
export class SiblingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
