import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Feature } from '@data/models/models/feature';
import { FeatureStatusEnum } from '@data/models/enums/feature-status.enum';
import { Control } from '@data/models/models/control';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureComponent implements OnChanges {
  @Input() feature: Feature;
  componentHeight = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.componentHeight = 100 + this.feature.controls.length * 30;
  }

  featureStatusIcon(feature: Feature | Control) {
    if (feature) {
      switch (feature.status) {
        case FeatureStatusEnum.OK:
          return 'check_circle_outline';
        case FeatureStatusEnum.WARNING:
          return 'error_outline';
        case FeatureStatusEnum.ALERT:
          return 'remove_circle_outline';
      }
      return '';
    }
  }

  trackByControl = (index, control: Control) => {
    return index;
  }

}
