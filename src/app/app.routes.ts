import { Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { DetailsComponent } from './features/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'detail/:code', component: DetailsComponent },
  { path: '**', redirectTo: 'list' },
];