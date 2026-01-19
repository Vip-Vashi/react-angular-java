import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contentprojection',
  imports: [CardComponent,MatCardModule],
  templateUrl: './contentprojection.component.html',
  styleUrl: './contentprojection.component.css'
})
export class ContentprojectionComponent {

}
