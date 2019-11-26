import { Control } from '@data/models/models/control';
import { FeatureStatusEnum } from '@data/models/enums/feature-status.enum';

export class Feature {
  name: string;
  status: FeatureStatusEnum;
  controls: Control[];

  constructor(f?) {
    if (f) {
      this.name = f.name;
      this.status = Math.floor(Math.random() * 3); // f.status;
      this.controls = f.controls ? f.controls.map(p => new Control(p)) : [];
    }
  }
}
