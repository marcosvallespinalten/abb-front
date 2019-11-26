import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PartService } from '@data/services/part/part.service';
import { Part } from '@data/models/models/part';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  part$: Observable<Part>;

  constructor(
    private partService: PartService
  ) { }

  ngOnInit() {
    this.part$ = this.partService.get();
  }
}
