import { Component, Input } from '@angular/core';
import { Complete } from '../../models/hall-of-fame';

@Component({
  selector: 'tr[app-famous-person-item]',
  standalone: true,
  imports: [],
  templateUrl: './famous-person-item.component.html',
  styleUrl: './famous-person-item.component.css'
})
export class FamousPersonItemComponent {
  @Input() displayDev: Complete = {} as Complete;
}
