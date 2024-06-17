import { Component } from '@angular/core';
import { HallOfFameService } from '../../services/hall-of-fame.service';
import { HallOfFameModel } from '../../models/hall-of-fame';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  constructor(private _hallOfFame: HallOfFameService) {}

  personResult: HallOfFameModel = {} as HallOfFameModel;

  ngOnInit() {
    this.callApi();
  }

  callApi(): void {
    this._hallOfFame.getPerson().subscribe((response: HallOfFameModel) => {
      console.log(response);
      this.personResult = response;
    })
  }
}
