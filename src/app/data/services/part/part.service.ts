import { Injectable } from '@angular/core';
import {  Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Part } from '@data/models/models/part';
import { PART_1 } from '@data/mocks/parts.mock';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor() {
  }

  // get a part by Id
  get(id?: number): Observable<Part> {
    return  timer(0, 10000) // fake reload data in 10s
      .pipe(
        map(_ => PART_1), // fake response
        map(res => res || []),
        map(p => new Part(p)), // fake with random data
      );
  }
}
