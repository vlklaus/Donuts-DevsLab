import { Routes } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

export const routes: Routes = [
    {path:"Donuts", component: DonutsComponent},
    {path: "Hall of Fame", component: FamousPeopleComponent},
    {path: "", redirectTo: "/Donuts", pathMatch: "full"},
    {path: "**", redirectTo: "/Donuts", pathMatch: "full"}
];
