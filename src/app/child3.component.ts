import { Component, OnInit } from '@angular/core';
import { OnRouteReuse } from './interface-test';

@Component({
  template: `
    Child 3 <input>
  `,
})
export class Child3Component implements OnInit, OnRouteReuse {
  constructor() {}

  ngOnAttach(): void {
    console.log('Child3Component');
  }

  ngOnInit() {}
}
