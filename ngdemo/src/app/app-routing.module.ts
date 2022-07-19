import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), title: 'Welcome to my Angular demos!' },
  { path: 'dxsummit', loadChildren: () => import('./dxsummit/dxsummit.module').then(m => m.DxSummitModule), title: 'DX Summit Realtime' },
  { path: 'fm', loadChildren: () => import('./fake-module/fake-module.module').then(m => m.FakeModuleModule), title: 'Fake Module' },
  { path: 'NotFound404', loadChildren: () => import('./not-found404/not-found404.module').then(m => m.NotFound404Module), title: 'Page not found' },
  { path: '**', redirectTo: 'NotFound404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
