import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuuChinhChuyenPhatComponent } from './buu-chinh-chuyen-phat.component';

describe('BuuChinhChuyenPhatComponent', () => {
  let component: BuuChinhChuyenPhatComponent;
  let fixture: ComponentFixture<BuuChinhChuyenPhatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuuChinhChuyenPhatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuuChinhChuyenPhatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
