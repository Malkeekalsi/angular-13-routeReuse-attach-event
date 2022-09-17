import { Component, OnInit } from '@angular/core';
import { OnRouteReuse } from './interface-test';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      PARENT COMPONENT
      <input>
      <br>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ParentComponent implements OnInit, OnRouteReuse {
  constructor() {}

  ngOnAttach(): void {
    console.log('ParentComponent');
  }

  ngOnInit() {}
}
