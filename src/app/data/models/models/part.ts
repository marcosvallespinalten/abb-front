import { Feature } from '@data/models/models/feature';

export class Part {
  name: string;
  features: Feature[];

  constructor(p?) {
    if (p) {
      this.name = p.name;
      this.features = p.features ? p.features.map(f => new Feature(f)) : [];
    }
  }
}
