import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContactComponent } from './sidebar-contact.component';

describe('SidebarContactComponent', () => {
  let component: SidebarContactComponent;
  let fixture: ComponentFixture<SidebarContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
