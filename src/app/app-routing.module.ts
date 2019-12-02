import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
   loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'denuncia/:codigo', loadChildren: './denuncia/denuncia.module#DenunciaPageModule'  },

  { path: 'admi-control', loadChildren: './paginas/admi-control/admi-control.module#AdmiControlPageModule', canActivate: [AuthGuard] },
  { path: 'tab1', loadChildren: './paginas/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './paginas/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './paginas/tab3/tab3.module#Tab3PageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
