import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeModuleComponent } from './fake-module.component';

describe('FakeModuleComponent', () => {
  let component: FakeModuleComponent;
  let fixture: ComponentFixture<FakeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
