import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingLisComponent } from './shooping-lis.component';

describe('ShoopingLisComponent', () => {
  let component: ShoopingLisComponent;
  let fixture: ComponentFixture<ShoopingLisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoopingLisComponent]
    });
    fixture = TestBed.createComponent(ShoopingLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
