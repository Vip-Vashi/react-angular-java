import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsComponent } from './templateforms.component';
import {  provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

describe('TemplateformsComponent', () => {
  let component: TemplateformsComponent;
  let fixture: ComponentFixture<TemplateformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,TemplateformsComponent,NgTemplateOutlet],
      // declarations:[TemplateformsComponent],
      providers: [provideHttpClient(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark as invalid if name is empty', () => {
     const fixture = TestBed.createComponent(TemplateformsComponent);
     fixture.detectChanges();
     const name = fixture.nativeElement.querySelector('input[name="fname"]')
     const form = fixture.debugElement.injector.get(NgForm);
     name.value='';
     name.dispatchEvent(new Event('input'));
     fixture.detectChanges();
     expect(form.valid).toBeFalsy();
     expect(form.controls['fname'].invalid).toBe(true);
   
  })
});
