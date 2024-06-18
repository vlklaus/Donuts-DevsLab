import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut';
import { FormsModule } from '@angular/forms';
import { DonutItemComponent } from '../donut-item/donut-item.component';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [DonutItemComponent],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor (private _donutService: DonutService) {}

  donutResult: DonutModel = {} as DonutModel;

  ngOnInit() { //lifecycle hook, first rendering calls to happen and automatic
    this._donutService.getDonut().subscribe((response: DonutModel) => {
      console.log(response);
      this.donutResult = response;
    })};
}
