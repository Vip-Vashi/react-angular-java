import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, NgFor, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component,NgModule,Pipe,PipeTransform } from '@angular/core';
import { FilterpipeComponent } from '../filterpipe/filterpipe.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,PercentPipe,CurrencyPipe,SlicePipe,JsonPipe,DecimalPipe,FilterpipeComponent,FormsModule,NgFor,TitleCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
 today = new Date();
 items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  filterText = ''; 
}
