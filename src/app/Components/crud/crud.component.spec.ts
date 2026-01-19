import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from './crud.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudComponent],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title ',()=>{
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h2')?.textContent).toContain('Users Management');
  })
});
