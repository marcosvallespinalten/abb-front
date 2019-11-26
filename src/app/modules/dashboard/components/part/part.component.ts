import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Part } from '@data/models/models/part';
import { PartService } from '@data/services/part/part.service';
import { Feature } from '@data/models/models/feature';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartComponent implements OnInit {
  partId: number;
  part$: Observable<Part>;

  constructor(
    private partService: PartService
  ) {
    this.partId = 1; // fake part id
  }

  ngOnInit() {
    this.part$ = this.partService.get(this.partId);
  }

  trackByFeature = (index, feature: Feature) => {
    return index;
  }
}
