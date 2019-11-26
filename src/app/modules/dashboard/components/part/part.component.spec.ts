import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PartComponent } from './part.component';
import { PartService } from '@data/services/part/part.service';
import { of } from 'rxjs';
import { PART_1 } from '@data/mocks/parts.mock';

describe('PartComponent', () => {
  let component: PartComponent;
  let fixture: ComponentFixture<PartComponent>;

  let partService: PartService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartComponent ],
      providers: [PartService]
    })
    .compileComponents();

    // UserService provided to the TestBed
    partService = TestBed.get(PartService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load Part Id', fakeAsync(() => {
    expect(component.partId).toBeDefined();
  }));

  it('should load Part', fakeAsync(() => {
    spyOn(partService, 'get').and.returnValue(of(PART_1));
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.part$).toBeDefined();
  }));
});
