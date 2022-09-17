import { Component, OnInit } from '@angular/core';
import { OnRouteReuse } from './interface-test';

@Component({
  template: `
    Child 2 <input>
  `,
})
export class Child2Component implements OnInit, OnRouteReuse {
  constructor() {}

  ngOnAttach(): void {
    console.log('Child2Component');
  }

  ngOnInit() {}
}
