import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntimeComponent } from './ontime.component';

describe('OntimeComponent', () => {
  let component: OntimeComponent;
  let fixture: ComponentFixture<OntimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
