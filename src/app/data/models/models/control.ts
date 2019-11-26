import { FeatureStatusEnum } from '@data/models/enums/feature-status.enum';

export class Control {
  name: string;
  dev: number;
  devOutTolerance: number;
  status: FeatureStatusEnum;

  constructor(fp?) {
    if (fp) {
      this.name = fp.name;
      this.dev = Math.floor(Math.random() * 10); // fp.dev;
      this.devOutTolerance = Math.floor(Math.random() * 10); // fp.devOutTolerance;
      this.status = Math.floor(Math.random() * 3); // fp.status;
    }
  }
}
