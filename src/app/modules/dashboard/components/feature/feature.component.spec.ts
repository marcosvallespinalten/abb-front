import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';
import { FEATURE_LIST } from '@data/mocks/features.mock';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  const featureMock = FEATURE_LIST[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;

    component.feature = featureMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should habe Feature', () => {
    expect(component.feature).toBeDefined();
  });
});
