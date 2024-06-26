import { Component, Input } from '@angular/core';
import { DonutModel, Result } from '../../models/donut';

@Component({
  selector: 'app-donut-item',
  standalone: true,
  imports: [],
  templateUrl: './donut-item.component.html',
  styleUrl: './donut-item.component.css'
})
export class DonutItemComponent {
  @Input() displayDonut: Result = {} as Result;
}
