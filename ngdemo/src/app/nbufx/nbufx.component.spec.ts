import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbufxComponent } from './nbufx.component';

describe('NbufxComponent', () => {
  let component: NbufxComponent;
  let fixture: ComponentFixture<NbufxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbufxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbufxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
