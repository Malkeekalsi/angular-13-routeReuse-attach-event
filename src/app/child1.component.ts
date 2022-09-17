import { Component, OnInit } from '@angular/core';
import { OnRouteReuse } from './interface-test';

@Component({
  template: `
    Child 1 <input>
  `,
})
export class Child1Component implements OnInit, OnRouteReuse {
  constructor() {}
  ngOnAttach(): void {
    console.log('Child1Component');
  }

  ngOnInit() {}
}
