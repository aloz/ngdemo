import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateComponent } from './live-update.component';

describe('LiveUpdateComponent', () => {
  let component: LiveUpdateComponent;
  let fixture: ComponentFixture<LiveUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
