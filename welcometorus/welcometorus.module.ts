import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcometorusPageRoutingModule } from './welcometorus-routing.module';

import { WelcometorusPage } from './welcometorus.page';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    WelcometorusPageRoutingModule
  ],
  declarations: [WelcometorusPage]
})
export class WelcometorusPageModule {}
