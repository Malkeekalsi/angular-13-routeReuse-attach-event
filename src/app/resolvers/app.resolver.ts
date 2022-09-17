import { Observable, delay, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppResolver implements Resolve<number> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Observable<number> {
    return of(1000).pipe(
      delay(2000),
      tap((data) => console.log('data is', data))
    );
  }
}
