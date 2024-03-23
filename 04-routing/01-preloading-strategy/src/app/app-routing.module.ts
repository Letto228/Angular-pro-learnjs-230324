import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloading } from './preloading-stratagy.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    data: {
      needPreload: false,
    },
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      needPreload: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

