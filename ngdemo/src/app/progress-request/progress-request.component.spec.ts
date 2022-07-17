import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressRequestComponent } from './progress-request.component';

describe('ProgressRequestComponent', () => {
  let component: ProgressRequestComponent;
  let fixture: ComponentFixture<ProgressRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
