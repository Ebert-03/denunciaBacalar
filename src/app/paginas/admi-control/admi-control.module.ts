import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdmiControlPage } from './admi-control.page';

const routes: Routes = [
  {
    path: './admi-control',
    component: AdmiControlPage,
    children: [
      { path: 'tab1', loadChildren: './paginas/tab1/tab1.module#Tab1PageModule' },
      { path: 'tab2', loadChildren: './paginas/tab2/tab2.module#Tab2PageModule' },
      { path: 'tab3', loadChildren: './paginas/tab3/tab3.module#Tab3PageModule' },
    ]
  },
  {
    path: '',
    redirectTo: './admi-control/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmiControlPage]
})
export class AdmiControlPageModule {}
