import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxcounterComponent } from './ngrxcounter.component';

describe('NgrxcounterComponent', () => {
  let component: NgrxcounterComponent;
  let fixture: ComponentFixture<NgrxcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
