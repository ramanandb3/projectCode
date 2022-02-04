import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcometorusPage } from './welcometorus.page';

const routes: Routes = [
  {
    path: '',
    component: WelcometorusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcometorusPageRoutingModule {}
