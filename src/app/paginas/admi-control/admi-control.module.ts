import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmiControlPage } from './admi-control.page';

import { AdmiControlPageRoutingModule} from './admi-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
    AdmiControlPageRoutingModule
  ],
  declarations: [AdmiControlPage]
})
export class AdmiControlPageModule {}
