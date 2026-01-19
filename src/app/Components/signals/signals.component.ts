import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalService } from './signals.service';

@Component({
  selector: 'app-counter',
  templateUrl: './signals.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class CounterComponent {
  constructor(public signalService: SignalService) {}
}
