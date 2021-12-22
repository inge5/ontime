import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntimeComponent } from './ontime/ontime.component';

const routes: Routes = [
  { path: '', component: OntimeComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 64],
    useHash: true, initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
