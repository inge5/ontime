import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateContactoComponent } from './animate-contacto.component';

describe('AnimateContactoComponent', () => {
  let component: AnimateContactoComponent;
  let fixture: ComponentFixture<AnimateContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimateContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
