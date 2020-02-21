import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMidComponent } from './menu-mid.component';

describe('MenuMidComponent', () => {
  let component: MenuMidComponent;
  let fixture: ComponentFixture<MenuMidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
