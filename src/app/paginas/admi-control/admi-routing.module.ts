import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { IonicModule } from '@ionic/angular';

import { AdmiControlPage } from './admi-control.page';

const routes: Routes = [
  {
    path: 'admi-control',
    component: AdmiControlPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admi-control/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admi-control/tab1',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
  // declarations: [AdmiControlPage]
})
export class AdmiControlPageRoutingModule {}
